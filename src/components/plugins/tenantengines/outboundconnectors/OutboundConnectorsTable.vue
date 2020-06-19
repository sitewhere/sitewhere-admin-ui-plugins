<template>
  <content-section :icon="icon" title="Outbound Connectors">
    <section-overview title="Configured Outbound Connectors">
      Outbound connectors allow device event data to be
      forwarded to external systems for further processing.
    </section-overview>
    <datatable-section :headers="headers" :items="connectorsAsSortedArray" width="50%">
      <template v-slot:item="props">
        <tr>
          <td width="32%">
            <datatable-link
              @linkClicked="onOpenConnector(props.item.meta.id)"
              :text="props.item.meta.id"
            />
          </td>
          <td width="32%">{{ props.item.meta.type }}</td>
          <td width="4%">
            <content-delete-icon @delete="onDeleteConnector(props.item.meta.id)" />
          </td>
        </tr>
      </template>
      <template v-slot:datatable-footer>
        <content-link
          class="mt-7"
          icon="fa-plus-circle"
          text="Add new outbound connector."
          @linkClicked="onAddConnector"
        />
      </template>
      <template v-slot:datatable-dialogs>
        <new-outbound-connector-chooser ref="chooser" @chosen="onConnectorCreate" />
        <mqtt-outbound-connector-create-dialog
          ref="mqttCreate"
          :tenantId="tenantId"
          @create="onConnectorAdded"
        />
        <mqtt-outbound-connector-update-dialog
          ref="mqttUpdate"
          :tenantId="tenantId"
          @update="onConnectorUpdated"
        />
      </template>
    </datatable-section>
  </content-section>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch, Ref } from "vue-property-decorator";
import { MicroserviceIcon } from "sitewhere-ide-common";

import {
  ContentSection,
  DatatableSection,
  DatatableLink,
  ContentDeleteIcon,
  ContentLink,
  SectionOverview
} from "sitewhere-ide-components";

import NewOutboundConnectorChooser from "./NewOutboundConnectorChooser.vue";
import MqttOutboundConnectorCreateDialog from "./mqtt/MqttOutboundConnectorCreateDialog.vue";
import MqttOutboundConnectorUpdateDialog from "./mqtt/MqttOutboundConnectorUpdateDialog.vue";

import { IOutboundConnectorGenericConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    ContentSection,
    DatatableSection,
    DatatableLink,
    ContentDeleteIcon,
    ContentLink,
    SectionOverview,
    NewOutboundConnectorChooser,
    MqttOutboundConnectorCreateDialog,
    MqttOutboundConnectorUpdateDialog
  }
})
export default class OutboundConnectorsTable extends Vue {
  @Prop() readonly tenantId!: string;
  @Prop() readonly connectors!: IOutboundConnectorGenericConfiguration[];
  @Ref() readonly chooser!: NewOutboundConnectorChooser;
  @Ref() readonly mqttCreate!: MqttOutboundConnectorCreateDialog;
  @Ref() readonly mqttUpdate!: MqttOutboundConnectorUpdateDialog;

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  headers: any[] = [
    { text: "Id", value: "id" },
    { text: "Type", value: "type" },
    { text: "", value: "delete" }
  ];

  /** Event sources in format for display */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  connectorsAsSortedArray: any[] = [];

  @Watch("connectors", { immediate: true })
  onConnectorsUpdated() {
    this.calculateConnectorsAsSortedArray();
  }

  /** Get page icon */
  get icon(): MicroserviceIcon {
    return MicroserviceIcon.EventSources;
  }

  /** Get list of ids already in use */
  findIdsInUse(exclude?: string): string[] {
    const ids: string[] = [];
    if (this.connectors) {
      this.connectors.forEach(conn => {
        if (conn.id != exclude) {
          ids.push(conn.id);
        }
      });
    }
    return ids;
  }

  /** Get connector index based on id */
  getConnectorIndex(id: string): number | null {
    let match: number | null = null;
    if (this.connectors) {
      this.connectors.forEach((conn, index) => {
        if (conn.id === id) {
          match = index;
        }
      });
    }
    return match;
  }

  /** Get a connector by id */
  getConnectorById(id: string): IOutboundConnectorGenericConfiguration | null {
    const index: number | null = this.getConnectorIndex(id);
    if (this.connectors && index != null) {
      return this.connectors[index];
    }
    return null;
  }

  /** Get connectors as a sorted array */
  calculateConnectorsAsSortedArray(): void {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const all: any[] = [];
    if (this.connectors) {
      this.connectors.forEach(conn => {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        const meta: any = {};
        meta.id = conn.id;
        meta.type = conn.type;
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        const config: any = conn.configuration;
        all.push({ meta: meta, config: config });
      });
    }
    all.sort(function(a, b) {
      return a.meta.id.localeCompare(b.meta.id);
    });
    this.connectorsAsSortedArray = all;
  }

  /** Add new connector */
  onAddConnector() {
    this.chooser.openChooser();
  }

  /** Called to create a new connector based on type */
  onConnectorCreate(id: string): void {
    const idsInUse: string[] = this.findIdsInUse();
    if (id == "mqtt") {
      this.mqttCreate.openDialog(idsInUse);
    }
  }

  /** Called when connector is added */
  onConnectorAdded(config: IOutboundConnectorGenericConfiguration): void {
    if (this.connectors) {
      this.connectors.push(config);
      this.calculateConnectorsAsSortedArray();
    }
    this.$emit("create", config);
  }

  /** Open connector by id */
  onOpenConnector(id: string) {
    const config: IOutboundConnectorGenericConfiguration | null = this.getConnectorById(
      id
    );
    const idsInUse: string[] = this.findIdsInUse(id);
    if (config) {
      if (config.type === "mqtt") {
        this.mqttUpdate.openDialog(config, idsInUse);
      }
    }
  }

  /** Called when connector is updated */
  onConnectorUpdated(
    originalId: string,
    config: IOutboundConnectorGenericConfiguration
  ): void {
    const index: number | null = this.getConnectorIndex(originalId);
    if (this.connectors && index != null) {
      Vue.set(this.connectors, index, config);
      this.calculateConnectorsAsSortedArray();
    }
    this.$emit("update", originalId, config);
  }

  /** Delete connector by id */
  onDeleteConnector(id: string) {
    const index: number | null = this.getConnectorIndex(id);
    if (this.connectors && index != null) {
      this.connectors.splice(index, 1);
      this.calculateConnectorsAsSortedArray();
    }
    this.$emit("delete", id);
  }
}
</script>

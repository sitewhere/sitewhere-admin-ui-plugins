<template>
  <sw-datatable-section
    :icon="icon"
    title="Command Destinations"
    :headers="headers"
    :items="commandDestsAsSortedArray"
    width="50%"
  >
    <template v-slot:items="props">
      <td>
        <sw-datatable-link
          @linkClicked="onOpenCommandDestination(props.item.meta.id)"
          :text="props.item.meta.id"
        />
      </td>
      <td>{{ props.item.meta.type }}</td>
      <td>
        <sw-content-delete-icon @delete="onDeleteCommandDestination(props.item.meta.id)" />
      </td>
    </template>
    <template v-slot:datatable-footer>
      <sw-content-link
        class="mt-3"
        icon="fa-plus-circle"
        text="Add new command destination."
        @linkClicked="onAddCommandDestination"
      />
    </template>
    <template v-slot:datatable-dialogs>
      <new-command-destination-chooser ref="chooser" @chosen="onCommandDestinationCreate" />
      <coap-command-destination-create-dialog
        ref="coapCreate"
        :tenantId="tenantId"
        @create="onCommandDestinationAdded"
      />
      <coap-command-destination-update-dialog
        ref="coapUpdate"
        :tenantId="tenantId"
        @update="onCommandDestinationUpdated"
      />
      <mqtt-command-destination-create-dialog
        ref="mqttCreate"
        :tenantId="tenantId"
        @create="onCommandDestinationAdded"
      />
      <mqtt-command-destination-update-dialog
        ref="mqttUpdate"
        :tenantId="tenantId"
        @update="onCommandDestinationUpdated"
      />
    </template>
  </sw-datatable-section>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch, Ref } from "vue-property-decorator";
import { MicroserviceIcon } from "sitewhere-ide-common";

import NewCommandDestinationChooser from "./NewCommandDestinationChooser.vue";
import CoapCommandDestinationCreateDialog from "./coap/CoapCommandDestinationCreateDialog.vue";
import CoapCommandDestinationUpdateDialog from "./coap/CoapCommandDestinationUpdateDialog.vue";
import MqttCommandDestinationCreateDialog from "./mqtt/MqttCommandDestinationCreateDialog.vue";
import MqttCommandDestinationUpdateDialog from "./mqtt/MqttCommandDestinationUpdateDialog.vue";

import { ICommandDestinationGenericConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    NewCommandDestinationChooser,
    CoapCommandDestinationCreateDialog,
    CoapCommandDestinationUpdateDialog,
    MqttCommandDestinationCreateDialog,
    MqttCommandDestinationUpdateDialog
  }
})
export default class CommandDeliveryTable extends Vue {
  @Prop() readonly tenantId!: string;
  @Prop()
  readonly commandDestinations!: ICommandDestinationGenericConfiguration[];
  @Ref() readonly chooser!: NewCommandDestinationChooser;
  @Ref() readonly coapCreate!: CoapCommandDestinationCreateDialog;
  @Ref() readonly coapUpdate!: CoapCommandDestinationUpdateDialog;
  @Ref() readonly mqttCreate!: MqttCommandDestinationCreateDialog;
  @Ref() readonly mqttUpdate!: MqttCommandDestinationUpdateDialog;

  headers: any[] = [
    { text: "Id", value: "id" },
    { text: "Type", value: "type" },
    { text: "", value: "delete" }
  ];

  /** Command destinations in format for display */
  commandDestsAsSortedArray: any[] = [];

  @Watch("commandDestinations", { immediate: true })
  onCommandDestinationsUpdated(updated: any) {
    this.calculateCommandDestinationsAsSortedArray();
  }

  /** Get page icon */
  get icon(): MicroserviceIcon {
    return MicroserviceIcon.CommandDelivery;
  }

  /** Get list of ids already in use */
  findIdsInUse(exclude?: string): string[] {
    let ids: string[] = [];
    if (this.commandDestinations) {
      this.commandDestinations.forEach(dest => {
        if (dest.id != exclude) {
          ids.push(dest.id);
        }
      });
    }
    return ids;
  }

  /** Get command destination index based on id */
  getCommandDestinationIndex(id: string): number | null {
    let match: number | null = null;
    if (this.commandDestinations) {
      this.commandDestinations.forEach((dest, index) => {
        if (dest.id === id) {
          match = index;
        }
      });
    }
    return match;
  }

  /** Get a command destination by id */
  getCommandDestinationById(
    id: string
  ): ICommandDestinationGenericConfiguration | null {
    let index: number | null = this.getCommandDestinationIndex(id);
    if (this.commandDestinations && index != null) {
      return this.commandDestinations[index];
    }
    return null;
  }

  /** Get command destinations as a sorted array */
  calculateCommandDestinationsAsSortedArray(): void {
    let all: any[] = [];
    if (this.commandDestinations) {
      this.commandDestinations.forEach(dest => {
        let meta: any = {};
        meta.id = dest.id;
        meta.type = dest.type;
        let config: any = dest.configuration;
        all.push({ meta: meta, config: config });
      });
    }
    all.sort(function(a, b) {
      return a.meta.id.localeCompare(b.meta.id);
    });
    this.commandDestsAsSortedArray = all;
  }

  /** Add new command destination */
  onAddCommandDestination() {
    (this.chooser as any).openChooser();
  }

  /** Called to create a new command destination based on type */
  onCommandDestinationCreate(id: string): void {
    let idsInUse: string[] = this.findIdsInUse();
    if (id == "coap") {
      (this.coapCreate as any).openDialog(idsInUse);
    } else if (id == "mqtt") {
      (this.mqttCreate as any).openDialog(idsInUse);
    }
  }

  /** Called when command destination is added */
  onCommandDestinationAdded(
    config: ICommandDestinationGenericConfiguration
  ): void {
    if (this.commandDestinations) {
      this.commandDestinations.push(config);
      this.calculateCommandDestinationsAsSortedArray();
    }
    this.$emit("create", config);
  }

  /** Open command destination by id */
  onOpenCommandDestination(id: string) {
    let config: ICommandDestinationGenericConfiguration | null = this.getCommandDestinationById(
      id
    );
    let idsInUse: string[] = this.findIdsInUse(id);
    if (config) {
      if (config.type === "coap") {
        (this.coapUpdate as any).openDialog(config, idsInUse);
      } else if (config.type === "mqtt") {
        (this.mqttUpdate as any).openDialog(config, idsInUse);
      }
    }
  }

  /** Called when command destination is updated */
  onCommandDestinationUpdated(
    originalId: string,
    config: ICommandDestinationGenericConfiguration
  ): void {
    let index: number | null = this.getCommandDestinationIndex(originalId);
    if (this.commandDestinations && index != null) {
      Vue.set(this.commandDestinations, index, config);
      this.calculateCommandDestinationsAsSortedArray();
    }
    this.$emit("update", originalId, config);
  }

  /** Delete command destination by id */
  onDeleteCommandDestination(id: string) {
    let index: number | null = this.getCommandDestinationIndex(id);
    if (this.commandDestinations && index != null) {
      this.commandDestinations.splice(index);
      this.calculateCommandDestinationsAsSortedArray();
    }
    this.$emit("delete", id);
  }
}
</script>

<style scoped></style>

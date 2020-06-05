<template>
  <content-section :icon="icon" title="Event Sources">
    <section-overview title="Configured Event Sources">
      Event sources receive events from external providers
      and covert them into a standardized format for
      further processing.
    </section-overview>
    <datatable-section :headers="headers" :items="eventSourcesAsSortedArray" width="50%">
      <template v-slot:item="props">
        <tr>
          <td width="32%">
            <datatable-link
              @linkClicked="onOpenEventSource(props.item.meta.id)"
              :text="props.item.meta.id"
            />
          </td>
          <td width="32%">{{ props.item.meta.type }}</td>
          <td width="32%">{{ props.item.decoder.type }}</td>
          <td width="4%">
            <content-delete-icon @delete="onDeleteEventSource(props.item.meta.id)" />
          </td>
        </tr>
      </template>
      <template v-slot:datatable-footer>
        <content-link
          class="mt-7"
          icon="fa-plus-circle"
          text="Add new event source."
          @linkClicked="onAddEventSource"
        />
      </template>
      <template v-slot:datatable-dialogs>
        <new-event-source-chooser ref="chooser" @chosen="onEventSourceCreate" />
        <active-mq-broker-event-source-create-dialog
          ref="amqBrokerCreate"
          :tenantId="tenantId"
          @create="onEventSourceAdded"
        />
        <active-mq-broker-event-source-update-dialog
          ref="amqBrokerUpdate"
          :tenantId="tenantId"
          @update="onEventSourceUpdated"
        />
        <active-mq-client-event-source-create-dialog
          ref="amqClientCreate"
          :tenantId="tenantId"
          @create="onEventSourceAdded"
        />
        <active-mq-client-event-source-update-dialog
          ref="amqClientUpdate"
          :tenantId="tenantId"
          @update="onEventSourceUpdated"
        />
        <coap-event-source-create-dialog
          ref="coapCreate"
          :tenantId="tenantId"
          @create="onEventSourceAdded"
        />
        <coap-event-source-update-dialog
          ref="coapUpdate"
          :tenantId="tenantId"
          @update="onEventSourceUpdated"
        />
        <event-hub-event-source-create-dialog ref="eventHubCreate" @create="onEventSourceAdded" />
        <event-hub-event-source-update-dialog
          ref="eventHubUpdate"
          :tenantId="tenantId"
          @update="onEventSourceUpdated"
        />
        <mqtt-event-source-create-dialog
          ref="mqttCreate"
          :tenantId="tenantId"
          @create="onEventSourceAdded"
        />
        <mqtt-event-source-update-dialog
          ref="mqttUpdate"
          :tenantId="tenantId"
          @update="onEventSourceUpdated"
        />
        <rabbit-mq-event-source-create-dialog
          ref="rabbitMqCreate"
          :tenantId="tenantId"
          @create="onEventSourceAdded"
        />
        <rabbit-mq-event-source-update-dialog
          ref="rabbitMqUpdate"
          :tenantId="tenantId"
          @update="onEventSourceUpdated"
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

import NewEventSourceChooser from "./NewEventSourceChooser.vue";
import ActiveMqBrokerEventSourceCreateDialog from "./activemq/ActiveMqBrokerEventSourceCreateDialog.vue";
import ActiveMqBrokerEventSourceUpdateDialog from "./activemq/ActiveMqBrokerEventSourceUpdateDialog.vue";
import ActiveMqClientEventSourceCreateDialog from "./activemq/ActiveMqClientEventSourceCreateDialog.vue";
import ActiveMqClientEventSourceUpdateDialog from "./activemq/ActiveMqClientEventSourceUpdateDialog.vue";
import CoapEventSourceCreateDialog from "./coap/CoapEventSourceCreateDialog.vue";
import CoapEventSourceUpdateDialog from "./coap/CoapEventSourceUpdateDialog.vue";
import EventHubEventSourceCreateDialog from "./azure/EventHubEventSourceCreateDialog.vue";
import EventHubEventSourceUpdateDialog from "./azure/EventHubEventSourceUpdateDialog.vue";
import MqttEventSourceCreateDialog from "./mqtt/MqttEventSourceCreateDialog.vue";
import MqttEventSourceUpdateDialog from "./mqtt/MqttEventSourceUpdateDialog.vue";
import RabbitMqEventSourceCreateDialog from "./rabbitmq/RabbitMqEventSourceCreateDialog.vue";
import RabbitMqEventSourceUpdateDialog from "./rabbitmq/RabbitMqEventSourceUpdateDialog.vue";

import { IEventSourceGenericConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    ContentSection,
    DatatableSection,
    DatatableLink,
    ContentDeleteIcon,
    ContentLink,
    SectionOverview,
    NewEventSourceChooser,
    ActiveMqBrokerEventSourceCreateDialog,
    ActiveMqBrokerEventSourceUpdateDialog,
    ActiveMqClientEventSourceCreateDialog,
    ActiveMqClientEventSourceUpdateDialog,
    CoapEventSourceCreateDialog,
    CoapEventSourceUpdateDialog,
    EventHubEventSourceCreateDialog,
    EventHubEventSourceUpdateDialog,
    MqttEventSourceCreateDialog,
    MqttEventSourceUpdateDialog,
    RabbitMqEventSourceCreateDialog,
    RabbitMqEventSourceUpdateDialog
  }
})
export default class EventSourcesTable extends Vue {
  @Prop() readonly tenantId!: string;
  @Prop() readonly eventSources!: IEventSourceGenericConfiguration[];
  @Ref() readonly chooser!: NewEventSourceChooser;
  @Ref() readonly amqBrokerCreate!: ActiveMqBrokerEventSourceCreateDialog;
  @Ref() readonly amqBrokerUpdate!: ActiveMqBrokerEventSourceUpdateDialog;
  @Ref() readonly amqClientCreate!: ActiveMqClientEventSourceCreateDialog;
  @Ref() readonly amqClientUpdate!: ActiveMqClientEventSourceUpdateDialog;
  @Ref() readonly coapCreate!: CoapEventSourceCreateDialog;
  @Ref() readonly coapUpdate!: CoapEventSourceUpdateDialog;
  @Ref() readonly eventHubCreate!: EventHubEventSourceCreateDialog;
  @Ref() readonly eventHubUpdate!: EventHubEventSourceUpdateDialog;
  @Ref() readonly mqttCreate!: MqttEventSourceCreateDialog;
  @Ref() readonly mqttUpdate!: MqttEventSourceUpdateDialog;
  @Ref() readonly rabbitMqCreate!: RabbitMqEventSourceCreateDialog;
  @Ref() readonly rabbitMqUpdate!: RabbitMqEventSourceUpdateDialog;

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  headers: any[] = [
    { text: "Id", value: "id" },
    { text: "Type", value: "type" },
    { text: "Decoder", value: "decoder" },
    { text: "", value: "delete" }
  ];

  /** Event sources in format for display */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  eventSourcesAsSortedArray: any[] = [];

  @Watch("eventSources", { immediate: true })
  onEventSourcesUpdated() {
    this.calculateEventSourcesAsSortedArray();
  }

  /** Get page icon */
  get icon(): MicroserviceIcon {
    return MicroserviceIcon.EventSources;
  }

  /** Get list of ids already in use */
  findIdsInUse(exclude?: string): string[] {
    const ids: string[] = [];
    if (this.eventSources) {
      this.eventSources.forEach(source => {
        if (source.id != exclude) {
          ids.push(source.id);
        }
      });
    }
    return ids;
  }

  /** Get event source index based on id */
  getEventSourceIndex(id: string): number | null {
    let match: number | null = null;
    if (this.eventSources) {
      this.eventSources.forEach((source, index) => {
        if (source.id === id) {
          match = index;
        }
      });
    }
    return match;
  }

  /** Get an event source by id */
  getEventSourceById(id: string): IEventSourceGenericConfiguration | null {
    const index: number | null = this.getEventSourceIndex(id);
    if (this.eventSources && index != null) {
      return this.eventSources[index];
    }
    return null;
  }

  /** Get event sources as a sorted array */
  calculateEventSourcesAsSortedArray(): void {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const all: any[] = [];
    if (this.eventSources) {
      this.eventSources.forEach(source => {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        const meta: any = {};
        meta.id = source.id;
        meta.type = source.type;
        meta.decoder = source.decoder;
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        const config: any = source.configuration;
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        const decoder: any = source.decoder;
        all.push({ meta: meta, config: config, decoder: decoder });
      });
    }
    all.sort(function(a, b) {
      return a.meta.id.localeCompare(b.meta.id);
    });
    this.eventSourcesAsSortedArray = all;
  }

  /** Add new event source */
  onAddEventSource() {
    this.chooser.openChooser();
  }

  /** Called to create a new event source based on type */
  onEventSourceCreate(id: string): void {
    const idsInUse: string[] = this.findIdsInUse();
    if (id == "activemq-broker") {
      this.amqBrokerCreate.openDialog(idsInUse);
    } else if (id == "activemq-client") {
      this.amqClientCreate.openDialog(idsInUse);
    } else if (id == "coap") {
      this.coapCreate.openDialog(idsInUse);
    } else if (id == "eventhub") {
      this.eventHubCreate.openDialog(idsInUse);
    } else if (id == "mqtt") {
      this.mqttCreate.openDialog(idsInUse);
    } else if (id == "rabbitmq") {
      this.rabbitMqCreate.openDialog(idsInUse);
    }
  }

  /** Called when event source is added */
  onEventSourceAdded(config: IEventSourceGenericConfiguration): void {
    if (this.eventSources) {
      this.eventSources.push(config);
      this.calculateEventSourcesAsSortedArray();
    }
    this.$emit("create", config);
  }

  /** Open event source by id */
  onOpenEventSource(id: string) {
    const config: IEventSourceGenericConfiguration | null = this.getEventSourceById(
      id
    );
    const idsInUse: string[] = this.findIdsInUse(id);
    if (config) {
      if (config.type === "activemq-broker") {
        this.amqBrokerUpdate.openDialog(config, idsInUse);
      } else if (config.type === "activemq-client") {
        this.amqClientUpdate.openDialog(config, idsInUse);
      } else if (config.type === "coap") {
        this.coapUpdate.openDialog(config, idsInUse);
      } else if (config.type === "eventhub") {
        this.eventHubUpdate.openDialog(config, idsInUse);
      } else if (config.type === "mqtt") {
        this.mqttUpdate.openDialog(config, idsInUse);
      } else if (config.type === "rabbitmq") {
        this.rabbitMqUpdate.openDialog(config, idsInUse);
      }
    }
  }

  /** Called when event source is updated */
  onEventSourceUpdated(
    originalId: string,
    config: IEventSourceGenericConfiguration
  ): void {
    const index: number | null = this.getEventSourceIndex(originalId);
    if (this.eventSources && index != null) {
      Vue.set(this.eventSources, index, config);
      this.calculateEventSourcesAsSortedArray();
    }
    this.$emit("update", originalId, config);
  }

  /** Delete event source by id */
  onDeleteEventSource(id: string) {
    const index: number | null = this.getEventSourceIndex(id);
    if (this.eventSources && index != null) {
      this.eventSources.splice(index);
      this.calculateEventSourcesAsSortedArray();
    }
    this.$emit("delete", id);
  }
}
</script>

<style scoped></style>

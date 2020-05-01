<template>
  <sw-new-element-chooser ref="dialog" :icon="icon" title="Add Event Source" width="500">
    <sw-new-element-entry
      icon="fa-globe"
      itemid="activemq-broker"
      @chosen="onChosen"
    >ActiveMQ Broker Event Source</sw-new-element-entry>
    <sw-new-element-entry
      icon="fa-globe"
      itemid="activemq-client"
      @chosen="onChosen"
    >ActiveMQ Client Event Source</sw-new-element-entry>
    <sw-new-element-entry
      icon="fa-globe"
      itemid="eventhub"
      @chosen="onChosen"
    >Azure Event Hub Event Source</sw-new-element-entry>
    <sw-new-element-entry icon="fa-globe" itemid="coap" @chosen="onChosen">CoAP Server Event Source</sw-new-element-entry>
    <sw-new-element-entry icon="fa-globe" itemid="mqtt" @chosen="onChosen">MQTT Event Source</sw-new-element-entry>
    <sw-new-element-entry icon="fa-globe" itemid="rabbitmq" @chosen="onChosen">RabbitMQ Event Source</sw-new-element-entry>
  </sw-new-element-chooser>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Ref } from "vue-property-decorator";
import { MicroserviceIcon } from "sitewhere-ide-common";

@Component({
  components: {}
})
export default class NewEventSourceChooser extends Vue {
  @Ref() readonly dialog!: any;

  /** Get page icon */
  get icon(): MicroserviceIcon {
    return MicroserviceIcon.EventSources;
  }

  /** Open chooser */
  openChooser(): void {
    this.dialog.openDialog();
  }

  /** Close chooser */
  closeChooser(): void {
    this.dialog.closeDialog();
  }

  /** Close chooser on item click */
  onChosen(id: string): void {
    this.closeChooser();
    this.$emit("chosen", id);
  }
}
</script>

<style scoped></style>

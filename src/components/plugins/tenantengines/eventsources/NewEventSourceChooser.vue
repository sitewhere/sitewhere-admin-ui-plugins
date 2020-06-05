<template>
  <new-element-chooser ref="dialog" :icon="icon" title="Add Event Source" width="500">
    <new-element-entry
      icon="fa-globe"
      item-id="activemq-broker"
      @chosen="onChosen"
    >ActiveMQ Broker Event Source</new-element-entry>
    <new-element-entry
      icon="fa-globe"
      item-id="activemq-client"
      @chosen="onChosen"
    >ActiveMQ Client Event Source</new-element-entry>
    <new-element-entry
      icon="fa-globe"
      item-id="eventhub"
      @chosen="onChosen"
    >Azure Event Hub Event Source</new-element-entry>
    <new-element-entry icon="fa-globe" item-id="coap" @chosen="onChosen">CoAP Server Event Source</new-element-entry>
    <new-element-entry icon="fa-globe" item-id="mqtt" @chosen="onChosen">MQTT Event Source</new-element-entry>
    <new-element-entry icon="fa-globe" item-id="rabbitmq" @chosen="onChosen">RabbitMQ Event Source</new-element-entry>
  </new-element-chooser>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Ref } from "vue-property-decorator";
import { MicroserviceIcon } from "sitewhere-ide-common";

import { NewElementChooser, NewElementEntry } from "sitewhere-ide-components";

@Component({
  components: { NewElementChooser, NewElementEntry }
})
export default class NewEventSourceChooser extends Vue {
  @Ref() readonly dialog!: NewElementChooser;

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

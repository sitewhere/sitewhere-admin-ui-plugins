<template>
  <new-element-chooser ref="dialog" :icon="icon" title="Add Outbound Connector" width="500">
    <new-element-entry icon="fa-globe" item-id="mqtt" @chosen="onChosen">MQTT Outbound Connector</new-element-entry>
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
export default class NewOutboundConnectorChooser extends Vue {
  @Ref() readonly dialog!: NewElementChooser;

  /** Get page icon */
  get icon(): MicroserviceIcon {
    return MicroserviceIcon.OutboundConnectors;
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

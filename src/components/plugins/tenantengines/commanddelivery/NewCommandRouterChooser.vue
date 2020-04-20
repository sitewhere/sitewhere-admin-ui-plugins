<template>
  <sw-new-element-chooser ref="dialog" :icon="icon" title="Add Command Router" width="500">
    <sw-new-element-entry
      icon="fa-globe"
      itemid="device-type-mapping"
      @chosen="onChosen"
    >Device Type Mapping Router</sw-new-element-entry>
  </sw-new-element-chooser>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Refs, MicroserviceIcon } from "sitewhere-ide-common";

@Component({
  components: {}
})
export default class NewCommandRouterChooser extends Vue {
  /** References */
  $refs!: Refs<{
    dialog: any;
  }>;

  /** Get page icon */
  get icon(): MicroserviceIcon {
    return MicroserviceIcon.CommandDelivery;
  }

  /** Open chooser */
  openChooser(): void {
    this.$refs.dialog.openDialog();
  }

  /** Close chooser */
  closeChooser(): void {
    this.$refs.dialog.closeDialog();
  }

  /** Close chooser on item click */
  onChosen(id: string): void {
    this.closeChooser();
    this.$emit("chosen", id);
  }
}
</script>

<style scoped></style>

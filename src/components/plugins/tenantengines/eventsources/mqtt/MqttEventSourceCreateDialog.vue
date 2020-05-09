<template>
  <mqtt-event-source-dialog
    ref="dialog"
    title="Create MQTT Event Source"
    width="700"
    createLabel="Create"
    cancelLabel="Cancel"
    :idsInUse="idsInUse"
    :tenantId="tenantId"
    @payload="onPayload"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Ref } from "vue-property-decorator";

import MqttEventSourceDialog from "./MqttEventSourceDialog.vue";

import { IMqttEventSourceConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    MqttEventSourceDialog
  }
})
export default class MqttEventSourceCreateDialog extends Vue {
  @Prop() readonly tenantId!: string;
  @Ref() readonly dialog!: MqttEventSourceDialog;

  idsInUse: string[] = [];

  /** Emit payload */
  onPayload(payload: IMqttEventSourceConfiguration): void {
    this.dialog.closeDialog();
    this.$emit("create", payload);
  }

  /** Open dialog */
  openDialog(idsInUse: string[]): void {
    this.idsInUse = idsInUse;
    this.dialog.reset();
    this.dialog.openDialog();
  }
}
</script>

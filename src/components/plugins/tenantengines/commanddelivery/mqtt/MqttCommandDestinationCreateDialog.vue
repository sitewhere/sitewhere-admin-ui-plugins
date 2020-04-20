<template>
  <mqtt-command-destination-dialog
    ref="dialog"
    title="Create MQTT Command Destination"
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
import { Component, Prop, Refs } from "sitewhere-ide-common";

import MqttCommandDestinationDialog from "./MqttCommandDestinationDialog.vue";

import { IMqttCommandDestinationConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    MqttCommandDestinationDialog
  }
})
export default class MqttCommandDestinationCreateDialog extends Vue {
  @Prop() readonly tenantId!: string;

  /** References */
  $refs!: Refs<{
    dialog: MqttCommandDestinationDialog;
  }>;

  idsInUse: string[] = [];

  /** Emit payload */
  onPayload(payload: IMqttCommandDestinationConfiguration): void {
    (this.$refs.dialog as any).closeDialog();
    this.$emit("create", payload);
  }

  /** Open dialog */
  openDialog(idsInUse: string[]): void {
    this.idsInUse = idsInUse;
    (this.$refs.dialog as any).reset();
    (this.$refs.dialog as any).openDialog();
  }
}
</script>

<style scoped></style>

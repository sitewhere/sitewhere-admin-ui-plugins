<template>
  <mqtt-command-destination-dialog
    ref="dialog"
    title="Update MQTT Command Destination"
    width="700"
    createLabel="Update"
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

import { ICommandDestinationGenericConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    MqttCommandDestinationDialog
  }
})
export default class MqttCommandDestinationUpdateDialog extends Vue {
  @Prop() readonly tenantId!: string;

  /** References */
  $refs!: Refs<{
    dialog: MqttCommandDestinationDialog;
  }>;

  originalId: string | null = null;
  idsInUse: string[] = [];

  /** Emit payload */
  onPayload(config: ICommandDestinationGenericConfiguration): void {
    (this.$refs.dialog as any).closeDialog();
    this.$emit("update", this.originalId, config);
  }

  /** Open dialog */
  openDialog(
    config: ICommandDestinationGenericConfiguration,
    idsInUse: string[]
  ): void {
    this.originalId = config.id;
    this.idsInUse = idsInUse;
    (this.$refs.dialog as any).reset();
    (this.$refs.dialog as any).openDialog();
    (this.$refs.dialog as any).load(config);
  }
}
</script>

<style scoped></style>

<template>
  <mqtt-outbound-connector-dialog
    ref="dialog"
    title="Update MQTT Outbound Connector"
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
import { Component, Prop, Ref } from "vue-property-decorator";

import MqttOutboundConnectorDialog from "./MqttOutboundConnectorDialog.vue";

import { IOutboundConnectorGenericConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    MqttOutboundConnectorDialog
  }
})
export default class MqttOutboundConnectorUpdateDialog extends Vue {
  @Prop() readonly tenantId!: string;
  @Ref() readonly dialog!: MqttOutboundConnectorDialog;

  originalId: string | null = null;
  idsInUse: string[] = [];

  /** Emit payload */
  onPayload(config: IOutboundConnectorGenericConfiguration): void {
    this.dialog.closeDialog();
    this.$emit("update", this.originalId, config);
  }

  /** Open dialog */
  openDialog(
    config: IOutboundConnectorGenericConfiguration,
    idsInUse: string[]
  ): void {
    this.originalId = config.id;
    this.idsInUse = idsInUse;
    this.dialog.reset();
    this.dialog.openDialog();
    this.dialog.load(config);
  }
}
</script>


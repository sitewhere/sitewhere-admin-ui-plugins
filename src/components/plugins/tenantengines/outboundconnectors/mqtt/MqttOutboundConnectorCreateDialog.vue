<template>
  <mqtt-outbound-connector-dialog
    ref="dialog"
    title="Create MQTT Outbound Connector"
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

import MqttOutboundConnectorDialog from "./MqttOutboundConnectorDialog.vue";

import { IMqttOutboundConnectorConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    MqttOutboundConnectorDialog
  }
})
export default class MqttOutboundConnectorCreateDialog extends Vue {
  @Prop() readonly tenantId!: string;
  @Ref() readonly dialog!: MqttOutboundConnectorDialog;

  idsInUse: string[] = [];

  /** Emit payload */
  onPayload(payload: IMqttOutboundConnectorConfiguration): void {
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

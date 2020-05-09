<template>
  <active-mq-broker-event-source-dialog
    ref="dialog"
    title="Create ActiveMQ Broker Event Source"
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

import ActiveMqBrokerEventSourceDialog from "./ActiveMqBrokerEventSourceDialog.vue";

import { IActiveMqBrokerConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    ActiveMqBrokerEventSourceDialog
  }
})
export default class ActiveMqBrokerEventSourceCreateDialog extends Vue {
  @Prop() readonly tenantId!: string;
  @Ref() readonly dialog!: ActiveMqBrokerEventSourceDialog;

  idsInUse: string[] = [];

  /** Emit payload */
  onPayload(payload: IActiveMqBrokerConfiguration): void {
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

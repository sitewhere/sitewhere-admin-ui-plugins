<template>
  <active-mq-client-event-source-dialog
    ref="dialog"
    title="Create ActiveMQ Client Event Source"
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

import ActiveMqClientEventSourceDialog from "./ActiveMqClientEventSourceDialog.vue";

import { IActiveMqClientConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    ActiveMqClientEventSourceDialog
  }
})
export default class ActiveMqBrokerEventSourceCreateDialog extends Vue {
  @Prop() readonly tenantId!: string;
  @Ref() readonly dialog!: ActiveMqClientEventSourceDialog;

  idsInUse: string[] = [];

  /** Emit payload */
  onPayload(payload: IActiveMqClientConfiguration): void {
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


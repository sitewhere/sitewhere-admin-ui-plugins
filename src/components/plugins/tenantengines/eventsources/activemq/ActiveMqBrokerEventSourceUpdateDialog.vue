<template>
  <active-mq-broker-event-source-dialog
    ref="dialog"
    title="Update ActiveMQ Broker Event Source"
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

import ActiveMqBrokerEventSourceDialog from "./ActiveMqBrokerEventSourceDialog.vue";

import { IEventSourceGenericConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    ActiveMqBrokerEventSourceDialog
  }
})
export default class ActiveMqBrokerEventSourceUpdateDialog extends Vue {
  @Prop() readonly tenantId!: string;

  /** References */
  $refs!: Refs<{
    dialog: ActiveMqBrokerEventSourceDialog;
  }>;

  originalId: string | null = null;
  idsInUse: string[] = [];

  /** Emit payload */
  onPayload(config: IEventSourceGenericConfiguration): void {
    (this.$refs.dialog as any).closeDialog();
    this.$emit("update", this.originalId, config);
  }

  /** Open dialog */
  openDialog(
    config: IEventSourceGenericConfiguration,
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

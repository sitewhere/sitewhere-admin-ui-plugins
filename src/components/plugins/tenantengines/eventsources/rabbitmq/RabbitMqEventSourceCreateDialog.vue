<template>
  <rabbit-mq-event-source-dialog
    ref="dialog"
    title="Create RabbitMQ Event Source"
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

import RabbitMqEventSourceDialog from "./RabbitMqEventSourceDialog.vue";

import { IRabbitMqConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    RabbitMqEventSourceDialog
  }
})
export default class RabbitMqEventSourceCreateDialog extends Vue {
  @Prop() readonly tenantId!: string;
  @Ref() readonly dialog!: RabbitMqEventSourceDialog;

  idsInUse: string[] = [];

  /** Emit payload */
  onPayload(payload: IRabbitMqConfiguration): void {
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


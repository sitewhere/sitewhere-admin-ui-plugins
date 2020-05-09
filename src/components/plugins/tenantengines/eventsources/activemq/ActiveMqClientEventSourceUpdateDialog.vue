<template>
  <active-mq-client-event-source-dialog
    ref="dialog"
    title="Update ActiveMQ Client Event Source"
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

import ActiveMqClientEventSourceDialog from "./ActiveMqClientEventSourceDialog.vue";

import { IEventSourceGenericConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    ActiveMqClientEventSourceDialog
  }
})
export default class ActiveMqClientEventSourceUpdateDialog extends Vue {
  @Prop() readonly tenantId!: string;
  @Ref() readonly dialog!: ActiveMqClientEventSourceDialog;

  originalId: string | null = null;
  idsInUse: string[] = [];

  /** Emit payload */
  onPayload(config: IEventSourceGenericConfiguration): void {
    this.dialog.closeDialog();
    this.$emit("update", this.originalId, config);
  }

  /** Open dialog */
  openDialog(
    config: IEventSourceGenericConfiguration,
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

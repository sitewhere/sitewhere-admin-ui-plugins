<template>
  <event-hub-event-source-dialog
    ref="dialog"
    title="Create Azure Event Hub Event Source"
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

import EventHubEventSourceDialog from "./EventHubEventSourceDialog.vue";

import { IEventHubConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    EventHubEventSourceDialog
  }
})
export default class EventHubEventSourceCreateDialog extends Vue {
  @Prop() readonly tenantId!: string;
  @Ref() readonly dialog!: EventHubEventSourceDialog;

  idsInUse: string[] = [];

  /** Emit payload */
  onPayload(payload: IEventHubConfiguration): void {
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

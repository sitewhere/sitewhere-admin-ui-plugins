<template>
  <coap-command-destination-dialog
    ref="dialog"
    title="Create CoAP Command Destination"
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

import CoapCommandDestinationDialog from "./CoapCommandDestinationDialog.vue";

import { ICoapCommandDestinationConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    CoapCommandDestinationDialog
  }
})
export default class CoapCommandDestinationCreateDialog extends Vue {
  @Prop() readonly tenantId!: string;

  /** References */
  $refs!: Refs<{
    dialog: CoapCommandDestinationDialog;
  }>;

  idsInUse: string[] = [];

  /** Emit payload */
  onPayload(payload: ICoapCommandDestinationConfiguration): void {
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

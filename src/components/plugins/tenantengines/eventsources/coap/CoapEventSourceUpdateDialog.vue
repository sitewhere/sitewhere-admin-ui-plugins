<template>
  <coap-event-source-dialog
    ref="dialog"
    title="Update CoAP Server Event Source"
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

import CoapEventSourceDialog from "./CoapEventSourceDialog.vue";

import { IEventSourceGenericConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    CoapEventSourceDialog
  }
})
export default class CoapEventSourceUpdateDialog extends Vue {
  @Prop() readonly tenantId!: string;
  @Ref() readonly dialog!: CoapEventSourceDialog;

  originalId: string | null = null;
  idsInUse: string[] = [];

  /** Emit payload */
  onPayload(config: IEventSourceGenericConfiguration): void {
    (this.dialog as any).closeDialog();
    this.$emit("update", this.originalId, config);
  }

  /** Open dialog */
  openDialog(
    config: IEventSourceGenericConfiguration,
    idsInUse: string[]
  ): void {
    this.originalId = config.id;
    this.idsInUse = idsInUse;
    (this.dialog as any).reset();
    (this.dialog as any).openDialog();
    (this.dialog as any).load(config);
  }
}
</script>

<style scoped></style>

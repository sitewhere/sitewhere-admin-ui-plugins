<template>
  <qr-code-label-generator-dialog
    ref="dialog"
    title="Create QR Code Label Generator"
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

import QrCodeLabelGeneratorDialog from "./QrCodeLabelGeneratorDialog.vue";

import { ILabelGeneratorGenericConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    QrCodeLabelGeneratorDialog
  }
})
export default class QrCodeLabelGeneratorCreateDialog extends Vue {
  @Prop() readonly tenantId!: string;
  @Ref() readonly dialog!: QrCodeLabelGeneratorDialog;

  idsInUse: string[] = [];

  /** Emit payload */
  onPayload(payload: ILabelGeneratorGenericConfiguration): void {
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

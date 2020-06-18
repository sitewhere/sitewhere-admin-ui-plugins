<template>
  <qr-code-label-generator-dialog
    ref="dialog"
    title="Update QR Code Label Generator"
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

import QrCodeLabelGeneratorDialog from "./QrCodeLabelGeneratorDialog.vue";

import { ILabelGeneratorGenericConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    QrCodeLabelGeneratorDialog
  }
})
export default class QrCodeLabelGeneratorUpdateDialog extends Vue {
  @Prop() readonly tenantId!: string;
  @Ref() readonly dialog!: QrCodeLabelGeneratorDialog;

  originalId: string | null = null;
  idsInUse: string[] = [];

  /** Emit payload */
  onPayload(config: ILabelGeneratorGenericConfiguration): void {
    this.dialog.closeDialog();
    this.$emit("update", this.originalId, config);
  }

  /** Open dialog */
  openDialog(
    config: ILabelGeneratorGenericConfiguration,
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


<template>
  <label-generator-dialog
    ref="dialog"
    type="qr-code"
    :tenantId="tenantId"
    :icon="icon"
    :title="title"
    :width="width"
    :loaded="true"
    :idsInUse="idsInUse"
    :visible="dialogVisible"
    :createLabel="createLabel"
    :cancelLabel="cancelLabel"
    :parameterExtractors="parameterExtractors"
    @createClicked="onCreateClicked"
    @cancelClicked="onCancelClicked"
  >
    <template slot="label-generator-tabs">
      <v-tab key="style">QR Code Style</v-tab>
    </template>
    <template slot="label-generator-tab-items">
      <v-tab-item key="style" eager>
        <qr-code-generator-fields ref="style" />
      </v-tab-item>
    </template>
  </label-generator-dialog>
</template>

<script lang="ts">
import { Component, Ref, Prop } from "vue-property-decorator";
import { MicroserviceIcon } from "sitewhere-ide-common";

import { DialogComponent } from "sitewhere-ide-components";
import { VTab, VTabItem } from "vuetify/lib";

import LabelGeneratorDialog from "../../LabelGeneratorDialog.vue";
import QrCodeGeneratorFields from "./QrCodeGeneratorFields.vue";

import { ILabelGeneratorGenericConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    VTab,
    VTabItem,
    LabelGeneratorDialog,
    QrCodeGeneratorFields
  }
})
export default class QrCodeLabelGeneratorDialog extends DialogComponent<
  ILabelGeneratorGenericConfiguration
> {
  @Prop() readonly tenantId!: string;
  @Prop() readonly title!: string;
  @Prop() readonly width!: number;
  @Prop() readonly createLabel!: string;
  @Prop() readonly cancelLabel!: string;
  @Prop() readonly idsInUse!: string[];
  @Ref() readonly dialog!: LabelGeneratorDialog;
  @Ref() readonly style!: QrCodeGeneratorFields;

  /** List of parameter extractors */
  parameterExtractors: { text: string; value: string }[] = [
    {
      text: "Default Extractor",
      value: "mqtt-default"
    }
  ];

  /** Get icon for dialog */
  get icon(): MicroserviceIcon {
    return MicroserviceIcon.LabelGeneration;
  }

  /** Generate payload from UI */
  generatePayload() {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const config: any = {};
    Object.assign(config, this.style.save());

    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const payload: any = {};
    Object.assign(payload, this.dialog.save());
    payload.configuration = config;

    return payload;
  }

  /** Reset dialog contents */
  reset() {
    if (this.style) {
      this.style.reset();
    }
    if (this.dialog) {
      this.dialog.reset();
    }
  }

  /** Load dialog from a given configuration */
  load(config: ILabelGeneratorGenericConfiguration) {
    this.reset();
    if (this.dialog) {
      this.dialog.load(config);
    }
    if (this.style) {
      this.style.load(config.configuration);
    }
  }

  /** Called after create button is clicked */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
  onCreateClicked(e: any) {
    if (!this.dialog.validate()) {
      return;
    }
    if (!this.style.validate()) {
      this.dialog.setActiveTab(0);
      return;
    }

    const payload = this.generatePayload();
    this.$emit("payload", payload);
  }
}
</script>

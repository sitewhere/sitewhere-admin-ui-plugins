<template>
  <command-destination-dialog
    ref="dialog"
    type="coap"
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
    <template slot="command-destination-tabs">
      <v-tab key="coap">Configuration</v-tab>
    </template>
    <template slot="command-destination-tab-items">
      <v-tab-item key="coap">
        <coap-fields ref="coap" />
      </v-tab-item>
    </template>
  </command-destination-dialog>
</template>

<script lang="ts">
import {
  Component,
  DialogComponent,
  Refs,
  Prop,
  MicroserviceIcon
} from "sitewhere-ide-common";
import { ICommandDestinationGenericConfiguration } from "sitewhere-configuration-model";

import CommandDestinationDialog from "../CommandDestinationDialog.vue";
import CoapFields from "./CoapFields.vue";

@Component({
  components: {
    CommandDestinationDialog,
    CoapFields
  }
})
export default class CoapCommandDestinationDialog extends DialogComponent<
  ICommandDestinationGenericConfiguration
> {
  @Prop() readonly tenantId!: string;
  @Prop() readonly title!: string;
  @Prop() readonly width!: number;
  @Prop() readonly createLabel!: string;
  @Prop() readonly cancelLabel!: string;
  @Prop() readonly idsInUse!: string[];

  // References.
  $refs!: Refs<{
    dialog: any;
    coap: CoapFields;
  }>;

  /** List of parameter extractors */
  parameterExtractors: { text: string; value: string }[] = [
    {
      text: "Metadata Extractor",
      value: "coap-default"
    }
  ];

  /** Get icon for dialog */
  get icon(): MicroserviceIcon {
    return MicroserviceIcon.EventSources;
  }

  /** Generate payload from UI */
  generatePayload() {
    let config: any = {};
    Object.assign(config, (this.$refs.coap as any).save());

    let payload: any = {};
    Object.assign(payload, (this.$refs.dialog as any).save());
    payload.configuration = config;

    return payload;
  }

  /** Reset dialog contents */
  reset() {
    if (this.$refs.coap) {
      (this.$refs.coap as any).reset();
    }
    this.$refs.dialog.reset();
  }

  /** Load dialog from a given configuration */
  load(config: ICommandDestinationGenericConfiguration) {
    this.reset();
    if (this.$refs.dialog) {
      this.$refs.dialog.load(config);
    }
    if (this.$refs.coap) {
      (this.$refs.coap as any).load(config.configuration);
    }
  }

  /** Called after create button is clicked */
  onCreateClicked(e: any) {
    if (!this.$refs.dialog.validate()) {
      return;
    }
    if (!(this.$refs.coap as any).validate()) {
      this.$refs.dialog.setActiveTab(0);
      return;
    }

    var payload = this.generatePayload();
    this.$emit("payload", payload);
  }
}
</script>

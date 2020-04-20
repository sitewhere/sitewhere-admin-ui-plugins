<template>
  <command-destination-dialog
    ref="dialog"
    type="mqtt"
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
      <v-tab key="connection">Connection</v-tab>
      <v-tab key="authentication">Authentication</v-tab>
    </template>
    <template slot="command-destination-tab-items">
      <v-tab-item key="connection">
        <mqtt-connection-fields ref="connection" />
      </v-tab-item>
      <v-tab-item key="authentication">
        <mqtt-authentication-fields ref="authentication" />
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
import MqttConnectionFields from "./MqttConnectionFields.vue";
import MqttAuthenticationFields from "./MqttAuthenticationFields.vue";

@Component({
  components: {
    CommandDestinationDialog,
    MqttConnectionFields,
    MqttAuthenticationFields
  }
})
export default class MqttCommandDestinationDialog extends DialogComponent<
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
    connection: MqttConnectionFields;
    authentication: MqttAuthenticationFields;
  }>;

  /** List of parameter extractors */
  parameterExtractors: { text: string; value: string }[] = [
    {
      text: "Default Extractor",
      value: "mqtt-default"
    }
  ];

  /** Get icon for dialog */
  get icon(): MicroserviceIcon {
    return MicroserviceIcon.EventSources;
  }

  /** Generate payload from UI */
  generatePayload() {
    let config: any = {};
    Object.assign(config, (this.$refs.connection as any).save());
    Object.assign(config, (this.$refs.authentication as any).save());

    let payload: any = {};
    Object.assign(payload, (this.$refs.dialog as any).save());
    payload.configuration = config;

    return payload;
  }

  /** Reset dialog contents */
  reset() {
    if (this.$refs.connection) {
      (this.$refs.connection as any).reset();
    }
    if (this.$refs.authentication) {
      (this.$refs.authentication as any).reset();
    }
    this.$refs.dialog.reset();
  }

  /** Load dialog from a given configuration */
  load(config: ICommandDestinationGenericConfiguration) {
    this.reset();
    if (this.$refs.dialog) {
      this.$refs.dialog.load(config);
    }
    if (this.$refs.connection) {
      (this.$refs.connection as any).load(config.configuration);
    }
    if (this.$refs.authentication) {
      (this.$refs.authentication as any).load(config.configuration);
    }
  }

  /** Called after create button is clicked */
  onCreateClicked(e: any) {
    if (!this.$refs.dialog.validate()) {
      return;
    }
    if (!(this.$refs.connection as any).validate()) {
      this.$refs.dialog.setActiveTab(0);
      return;
    }
    if (!(this.$refs.authentication as any).validate()) {
      this.$refs.dialog.setActiveTab(1);
      return;
    }

    var payload = this.generatePayload();
    this.$emit("payload", payload);
  }
}
</script>

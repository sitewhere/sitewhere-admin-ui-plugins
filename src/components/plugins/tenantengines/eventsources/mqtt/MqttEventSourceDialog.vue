<template>
  <event-source-dialog
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
    @createClicked="onCreateClicked"
    @cancelClicked="onCancelClicked"
  >
    <template slot="event-source-tabs">
      <v-tab key="connection">Connection</v-tab>
      <v-tab key="authentication">Authentication</v-tab>
    </template>
    <template slot="event-source-tab-items">
      <v-tab-item key="connection" eager>
        <mqtt-connection-fields ref="connection" />
      </v-tab-item>
      <v-tab-item key="authentication" eager>
        <mqtt-authentication-fields ref="authentication" />
      </v-tab-item>
    </template>
  </event-source-dialog>
</template>

<script lang="ts">
import { Component, Ref, Prop } from "vue-property-decorator";
import { MicroserviceIcon } from "sitewhere-ide-common";
import { DialogComponent } from "sitewhere-ide-components";
import { IEventSourceGenericConfiguration } from "sitewhere-configuration-model";

import { VTab, VTabItem } from "vuetify/lib";
import EventSourceDialog from "../EventSourceDialog.vue";
import MqttConnectionFields from "./MqttConnectionFields.vue";
import MqttAuthenticationFields from "./MqttAuthenticationFields.vue";

@Component({
  components: {
    VTab,
    VTabItem,
    EventSourceDialog,
    MqttConnectionFields,
    MqttAuthenticationFields
  }
})
export default class MqttEventSourceDialog extends DialogComponent<
  IEventSourceGenericConfiguration
> {
  @Prop() readonly tenantId!: string;
  @Prop() readonly title!: string;
  @Prop() readonly width!: number;
  @Prop() readonly createLabel!: string;
  @Prop() readonly cancelLabel!: string;
  @Prop() readonly idsInUse!: string[];
  @Ref() readonly dialog!: EventSourceDialog;
  @Ref() readonly connection!: MqttConnectionFields;
  @Ref() readonly authentication!: MqttAuthenticationFields;

  /** Get icon for dialog */
  get icon(): MicroserviceIcon {
    return MicroserviceIcon.EventSources;
  }

  /** Generate payload from UI */
  generatePayload() {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const config: any = {};
    Object.assign(config, this.connection.save());
    Object.assign(config, this.authentication.save());

    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const payload: any = {};
    Object.assign(payload, this.dialog.save());
    payload.configuration = config;

    return payload;
  }

  /** Reset dialog contents */
  reset(): void {
    if (this.connection) {
      this.connection.reset();
    }
    if (this.authentication) {
      this.authentication.reset();
    }
    this.dialog.reset();
  }

  /** Load dialog from a given configuration */
  load(config: IEventSourceGenericConfiguration): void {
    this.reset();
    if (this.dialog) {
      this.dialog.load(config);
    }
    if (this.connection) {
      this.connection.load(config.configuration);
    }
    if (this.authentication) {
      this.authentication.load(config.configuration);
    }
  }

  /** Called after create button is clicked */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
  onCreateClicked(e: any) {
    if (!this.dialog.validate()) {
      return;
    }
    if (!this.connection.validate()) {
      this.dialog.setActiveTab(0);
      return;
    }
    if (!this.authentication.validate()) {
      this.dialog.setActiveTab(1);
      return;
    }

    const payload = this.generatePayload();
    this.$emit("payload", payload);
  }
}
</script>

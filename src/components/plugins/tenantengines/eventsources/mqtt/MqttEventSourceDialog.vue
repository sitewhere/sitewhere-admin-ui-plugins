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
      <v-tab-item key="connection">
        <mqtt-connection-fields ref="connection" />
      </v-tab-item>
      <v-tab-item key="authentication">
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

import EventSourceDialog from "../EventSourceDialog.vue";
import MqttConnectionFields from "./MqttConnectionFields.vue";
import MqttAuthenticationFields from "./MqttAuthenticationFields.vue";

@Component({
  components: {
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
    let config: any = {};
    Object.assign(config, (this.connection as any).save());
    Object.assign(config, (this.authentication as any).save());

    let payload: any = {};
    Object.assign(payload, (this.dialog as any).save());
    payload.configuration = config;

    return payload;
  }

  /** Reset dialog contents */
  reset() {
    if (this.connection) {
      (this.connection as any).reset();
    }
    if (this.authentication) {
      (this.authentication as any).reset();
    }
    (this.dialog as any).reset();
  }

  /** Load dialog from a given configuration */
  load(config: IEventSourceGenericConfiguration) {
    this.reset();
    if (this.dialog) {
      (this.dialog as any).load(config);
    }
    if (this.connection) {
      (this.connection as any).load(config.configuration);
    }
    if (this.authentication) {
      (this.authentication as any).load(config.configuration);
    }
  }

  /** Called after create button is clicked */
  onCreateClicked(e: any) {
    if (!(this.dialog as any).validate()) {
      return;
    }
    if (!(this.connection as any).validate()) {
      (this.dialog as any).setActiveTab(0);
      return;
    }
    if (!(this.authentication as any).validate()) {
      (this.dialog as any).setActiveTab(1);
      return;
    }

    var payload = this.generatePayload();
    this.$emit("payload", payload);
  }
}
</script>

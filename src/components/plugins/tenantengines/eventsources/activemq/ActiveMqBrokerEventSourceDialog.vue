<template>
  <event-source-dialog
    ref="dialog"
    type="activemq-broker"
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
      <v-tab key="broker">Broker</v-tab>
    </template>
    <template slot="event-source-tab-items">
      <v-tab-item key="broker" eager>
        <active-mq-broker-fields ref="broker" />
      </v-tab-item>
    </template>
  </event-source-dialog>
</template>

<script lang="ts">
import { Component, Ref, Prop } from "vue-property-decorator";
import { MicroserviceIcon } from "sitewhere-ide-common";
import { IEventSourceGenericConfiguration } from "sitewhere-configuration-model";

import { DialogComponent } from "sitewhere-ide-components";
import { VTab, VTabItem } from "vuetify/lib";

import EventSourceDialog from "../EventSourceDialog.vue";
import ActiveMqBrokerFields from "./ActiveMqBrokerFields.vue";

@Component({
  components: {
    VTab,
    VTabItem,
    EventSourceDialog,
    ActiveMqBrokerFields
  }
})
export default class ActiveMqBrokerEventSourceDialog extends DialogComponent<
  IEventSourceGenericConfiguration
> {
  @Prop() readonly tenantId!: string;
  @Prop() readonly title!: string;
  @Prop() readonly width!: number;
  @Prop() readonly createLabel!: string;
  @Prop() readonly cancelLabel!: string;
  @Prop() readonly idsInUse!: string[];
  @Ref() readonly dialog!: EventSourceDialog;
  @Ref() readonly broker!: ActiveMqBrokerFields;

  /** Get icon for dialog */
  get icon(): MicroserviceIcon {
    return MicroserviceIcon.EventSources;
  }

  /** Generate payload from UI */
  generatePayload() {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const config: any = {};
    Object.assign(config, this.broker.save());

    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const payload: any = {};
    Object.assign(payload, this.dialog.save());
    payload.configuration = config;

    return payload;
  }

  /** Reset dialog contents */
  reset() {
    if (this.broker) {
      this.broker.reset();
    }
    this.dialog.reset();
  }

  /** Load dialog from a given configuration */
  load(config: IEventSourceGenericConfiguration) {
    this.reset();
    if (this.dialog) {
      this.dialog.load(config);
    }
    if (this.broker) {
      this.broker.load(config.configuration);
    }
  }

  /** Called after create button is clicked */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
  onCreateClicked(e: any) {
    if (!this.dialog.validate()) {
      return;
    }
    if (!this.broker.validate()) {
      this.dialog.setActiveTab(0);
      return;
    }

    const payload = this.generatePayload();
    this.$emit("payload", payload);
  }
}
</script>

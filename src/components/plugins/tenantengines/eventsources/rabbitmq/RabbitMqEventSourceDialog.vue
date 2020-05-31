<template>
  <event-source-dialog
    ref="dialog"
    type="rabbitmq"
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
      <v-tab key="client">Client</v-tab>
    </template>
    <template slot="event-source-tab-items">
      <v-tab-item key="client">
        <rabbit-mq-fields ref="client" />
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
import RabbitMqFields from "./RabbitMqFields.vue";

@Component({
  components: { VTab, VTabItem, EventSourceDialog, RabbitMqFields }
})
export default class RabbitMqEventSourceDialog extends DialogComponent<
  IEventSourceGenericConfiguration
> {
  @Prop() readonly tenantId!: string;
  @Prop() readonly title!: string;
  @Prop() readonly width!: number;
  @Prop() readonly createLabel!: string;
  @Prop() readonly cancelLabel!: string;
  @Prop() readonly idsInUse!: string[];
  @Ref() readonly dialog!: EventSourceDialog;
  @Ref() readonly client!: RabbitMqFields;

  /** Get icon for dialog */
  get icon(): MicroserviceIcon {
    return MicroserviceIcon.EventSources;
  }

  /** Generate payload from UI */
  generatePayload() {
    const config: {} = {};
    Object.assign(config, this.client.save());

    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const payload: any = {};
    Object.assign(payload, this.client.save());
    payload.configuration = config;

    return payload;
  }

  /** Reset dialog contents */
  reset() {
    if (this.client) {
      this.client.reset();
    }
    this.client.reset();
  }

  /** Load dialog from a given configuration */
  load(config: IEventSourceGenericConfiguration) {
    this.reset();
    if (this.dialog) {
      this.dialog.load(config);
    }
    if (this.client) {
      this.client.load(config.configuration);
    }
  }

  /** Called after create button is clicked */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
  onCreateClicked(e: any) {
    if (!this.dialog.validate()) {
      return;
    }
    if (!this.client.validate()) {
      this.dialog.setActiveTab(0);
      return;
    }

    const payload = this.generatePayload();
    this.$emit("payload", payload);
  }
}
</script>

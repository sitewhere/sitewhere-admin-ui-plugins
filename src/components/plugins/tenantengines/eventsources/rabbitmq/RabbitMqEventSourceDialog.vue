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

import EventSourceDialog from "../EventSourceDialog.vue";
import RabbitMqFields from "./RabbitMqFields.vue";

@Component({
  components: {
    EventSourceDialog,
    RabbitMqFields
  }
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
    let config: any = {};
    Object.assign(config, (this.client as any).save());

    let payload: any = {};
    Object.assign(payload, (this.dialog as any).save());
    payload.configuration = config;

    return payload;
  }

  /** Reset dialog contents */
  reset() {
    if (this.client) {
      (this.client as any).reset();
    }
    (this.dialog as any).reset();
  }

  /** Load dialog from a given configuration */
  load(config: IEventSourceGenericConfiguration) {
    this.reset();
    if (this.dialog) {
      (this.dialog as any).load(config);
    }
    if (this.client) {
      (this.client as any).load(config.configuration);
    }
  }

  /** Called after create button is clicked */
  onCreateClicked(e: any) {
    if (!(this.dialog as any).validate()) {
      return;
    }
    if (!(this.client as any).validate()) {
      (this.dialog as any).setActiveTab(0);
      return;
    }

    var payload = this.generatePayload();
    this.$emit("payload", payload);
  }
}
</script>

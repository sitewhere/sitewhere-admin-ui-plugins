<template>
  <event-source-dialog
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
    @createClicked="onCreateClicked"
    @cancelClicked="onCancelClicked"
  >
    <template slot="event-source-tabs">
      <v-tab key="server">Server</v-tab>
    </template>
    <template slot="event-source-tab-items">
      <v-tab-item key="server">
        <coap-server-fields ref="server" />
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
import CoapServerFields from "./CoapServerFields.vue";

@Component({
  components: {
    EventSourceDialog,
    CoapServerFields
  }
})
export default class CoapEventSourceDialog extends DialogComponent<
  IEventSourceGenericConfiguration
> {
  @Prop() readonly tenantId!: string;
  @Prop() readonly title!: string;
  @Prop() readonly width!: number;
  @Prop() readonly createLabel!: string;
  @Prop() readonly cancelLabel!: string;
  @Prop() readonly idsInUse!: string[];
  @Ref() readonly dialog!: EventSourceDialog;
  @Ref() readonly server!: CoapServerFields;

  /** Get icon for dialog */
  get icon(): MicroserviceIcon {
    return MicroserviceIcon.EventSources;
  }

  /** Generate payload from UI */
  generatePayload() {
    let config: any = {};
    Object.assign(config, (this.server as any).save());

    let payload: any = {};
    Object.assign(payload, (this.dialog as any).save());
    payload.configuration = config;

    return payload;
  }

  /** Reset dialog contents */
  reset() {
    if (this.server) {
      (this.server as any).reset();
    }
    (this.dialog as any).reset();
  }

  /** Load dialog from a given configuration */
  load(config: IEventSourceGenericConfiguration) {
    this.reset();
    if (this.dialog) {
      (this.dialog as any).load(config);
    }
    if (this.server) {
      (this.server as any).load(config.configuration);
    }
  }

  /** Called after create button is clicked */
  onCreateClicked(e: any) {
    if (!(this.dialog as any).validate()) {
      return;
    }
    if (!(this.server as any).validate()) {
      (this.dialog as any).setActiveTab(0);
      return;
    }

    var payload = this.generatePayload();
    this.$emit("payload", payload);
  }
}
</script>

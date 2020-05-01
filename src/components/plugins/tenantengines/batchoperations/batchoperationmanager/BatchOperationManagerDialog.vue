<template>
  <sw-base-dialog
    ref="dialog"
    :icon="icon"
    title="Edit Batch Operation Manager Settings"
    width="500"
    :loaded="true"
    :visible="dialogVisible"
    createLabel="Update"
    cancelLabel="Cancel"
    @createClicked="onCreateClicked"
    @cancelClicked="onCancelClicked"
  >
    <template slot="tabs">
      <v-tab key="manager">Manager</v-tab>
    </template>
    <template slot="tab-items">
      <v-tab-item key="manager">
        <batch-operation-manager-fields ref="manager" />
      </v-tab-item>
    </template>
  </sw-base-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Ref, Prop } from "vue-property-decorator";
import { MicroserviceIcon, ITabbedComponent } from "sitewhere-ide-common";
import { IBatchOperationManagerConfiguration } from "sitewhere-configuration-model";
import { DialogComponent, DialogSection } from "sitewhere-ide-components";

import BatchOperationManagerFields from "./BatchOperationManagerFields.vue";

@Component({
  components: { BatchOperationManagerFields }
})
export default class BatchOperationManagerDialog extends DialogComponent<
  IBatchOperationManagerConfiguration
> {
  @Ref() readonly dialog!: ITabbedComponent;
  @Ref() readonly manager!: Vue;

  /** Get icon for dialog */
  get icon(): MicroserviceIcon {
    return MicroserviceIcon.BatchOperations;
  }

  /** Convert to dialog section */
  get managerSection(): DialogSection {
    return this.manager as DialogSection;
  }

  /** Generate payload from UI */
  generatePayload() {
    let payload: any = {};
    Object.assign(payload, this.managerSection.save());

    return payload;
  }

  /** Reset dialog contents */
  reset() {
    if (this.manager) {
      this.managerSection.reset();
    }
  }

  /** Load dialog from a given configuration */
  load(config: IBatchOperationManagerConfiguration) {
    this.reset();
    if (this.manager) {
      this.managerSection.load(config);
    }
  }

  /** Called after create button is clicked */
  onCreateClicked(e: any) {
    if (!(this.manager as any).validate()) {
      this.dialog.setActiveTab(0);
      return;
    }

    var payload = this.generatePayload();
    this.$emit("update", payload);
    this.closeDialog();
  }
}
</script>

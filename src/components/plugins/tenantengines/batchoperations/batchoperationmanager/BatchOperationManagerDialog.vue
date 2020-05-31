<template>
  <base-dialog
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
  </base-dialog>
</template>

<script lang="ts">
import { Component, Ref } from "vue-property-decorator";
import { MicroserviceIcon, ITabbedComponent } from "sitewhere-ide-common";
import { IBatchOperationManagerConfiguration } from "sitewhere-configuration-model";
import { DialogComponent, BaseDialog } from "sitewhere-ide-components";

import BatchOperationManagerFields from "./BatchOperationManagerFields.vue";

import { VTab, VTabItem } from "vuetify/lib";

@Component({
  components: { VTab, VTabItem, BaseDialog, BatchOperationManagerFields }
})
export default class BatchOperationManagerDialog extends DialogComponent<
  IBatchOperationManagerConfiguration
> {
  @Ref() readonly dialog!: ITabbedComponent;
  @Ref() readonly manager!: BatchOperationManagerFields;

  /** Get icon for dialog */
  get icon(): MicroserviceIcon {
    return MicroserviceIcon.BatchOperations;
  }

  /** Generate payload from UI */
  generatePayload() {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const payload: any = {};
    Object.assign(payload, this.manager.save());

    return payload;
  }

  /** Reset dialog contents */
  reset() {
    if (this.manager) {
      this.manager.reset();
    }
  }

  /** Load dialog from a given configuration */
  load(config: IBatchOperationManagerConfiguration) {
    this.reset();
    if (this.manager) {
      this.manager.load(config);
    }
  }

  /** Called after create button is clicked */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
  onCreateClicked(e: any) {
    if (!this.manager.validate()) {
      this.dialog.setActiveTab(0);
      return;
    }

    const payload = this.generatePayload();
    this.$emit("update", payload);
    this.closeDialog();
  }
}
</script>

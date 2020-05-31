<template>
  <content-section :icon="icon" title="Batch Operation Manager">
    <content-field name="throttle delay(ms)" :value="throttleDelayMs" />
    <content-link
      class="mt-3"
      icon="fa-edit"
      text="Edit batch operation manager settings."
      @linkClicked="onEditBatchOperationManager"
    />
    <batch-operation-manager-dialog ref="dialog" @update="onBatchOperationManagerUpdate" />
  </content-section>
</template>

<script lang="ts">
import Vue from "vue";

import { Component, Ref, Prop } from "vue-property-decorator";
import { MicroserviceIcon } from "sitewhere-ide-common";
import { IBatchOperationManagerConfiguration } from "sitewhere-configuration-model";

import BatchOperationManagerDialog from "./BatchOperationManagerDialog.vue";

import {
  ContentSection,
  ContentField,
  ContentLink
} from "sitewhere-ide-components";

@Component({
  components: {
    ContentSection,
    ContentField,
    ContentLink,
    BatchOperationManagerDialog
  }
})
export default class BatchOperationManagerSection extends Vue {
  @Prop() readonly configuration!: IBatchOperationManagerConfiguration;
  @Ref() readonly dialog!: BatchOperationManagerDialog;

  /** Get icon for dialog */
  get icon(): MicroserviceIcon {
    return MicroserviceIcon.BatchOperations;
  }

  /** Get throttle delay(ms) */
  get throttleDelayMs(): number {
    return this.configuration ? this.configuration.throttleDelayMs : 0;
  }

  /** Called to edit batch operation manager settings */
  onEditBatchOperationManager(): void {
    this.dialog.openDialog();
    this.dialog.load(this.configuration);
  }

  /** Handle update */
  onBatchOperationManagerUpdate(updated: IBatchOperationManagerConfiguration) {
    this.$emit("update", updated);
  }
}
</script>

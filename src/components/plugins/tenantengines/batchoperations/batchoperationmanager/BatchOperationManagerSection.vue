<template>
  <sw-content-section :icon="icon" title="Batch Operation Manager">
    <sw-content-field name="throttle delay(ms)" :value="throttleDelayMs" />
    <sw-content-link
      class="mt-3"
      icon="fa-edit"
      text="Edit batch operation manager settings."
      @linkClicked="onEditBatchOperationManager"
    />
    <batch-operation-manager-dialog ref="dialog" @update="onBatchOperationManagerUpdate" />
  </sw-content-section>
</template>

<script lang="ts">
import Vue from "vue";

import { Component, Ref, Prop } from "vue-property-decorator";
import { MicroserviceIcon } from "sitewhere-ide-common";
import { IBatchOperationManagerConfiguration } from "sitewhere-configuration-model";

import BatchOperationManagerDialog from "./BatchOperationManagerDialog.vue";

@Component({
  components: { BatchOperationManagerDialog }
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
    (this.dialog as any).openDialog();
    (this.dialog as any).load(this.configuration);
  }

  /** Handle update */
  onBatchOperationManagerUpdate(updated: IBatchOperationManagerConfiguration) {
    this.$emit("update", updated);
  }
}
</script>

<style scoped></style>

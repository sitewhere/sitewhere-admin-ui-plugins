<template>
  <ts-datastore-dialog
    ref="dialog"
    title="Create Timeseries Datastore"
    createLabel="Create"
    :instance="instance"
    @payload="onPayload"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Ref, Prop } from "vue-property-decorator";

import TsDatastoreDialog from "./TsDatastoreDialog.vue";

import { IDatastoreDefinition } from "sitewhere-configuration-model";
import { IInstanceConfiguration } from "sitewhere-rest-api";

@Component({
  components: {
    TsDatastoreDialog
  }
})
export default class TsDatastoreCreateDialog extends Vue {
  @Prop() readonly instance!: IInstanceConfiguration;
  @Ref() readonly dialog!: TsDatastoreDialog;

  idsInUse: string[] = [];

  /** Emit payload */
  onPayload(payload: IDatastoreDefinition): void {
    this.dialog.closeDialog();
    this.$emit("create", payload);
  }

  /** Open dialog */
  openDialog(): void {
    this.dialog.reset();
    this.dialog.openDialog();
  }
}
</script>

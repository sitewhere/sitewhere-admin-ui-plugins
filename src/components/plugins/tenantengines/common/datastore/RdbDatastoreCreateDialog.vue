<template>
  <rdb-datastore-dialog
    ref="dialog"
    title="Create Relational Datastore"
    createLabel="Create"
    :instance="instance"
    @payload="onPayload"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Ref, Prop } from "vue-property-decorator";

import RdbDatastoreDialog from "./RdbDatastoreDialog.vue";

import { IDatastoreDefinition } from "sitewhere-configuration-model";
import { IInstanceConfiguration } from "sitewhere-rest-api";

@Component({
  components: {
    RdbDatastoreDialog
  }
})
export default class RdbDatastoreCreateDialog extends Vue {
  @Prop() readonly instance!: IInstanceConfiguration;
  @Ref() readonly dialog!: RdbDatastoreDialog;

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

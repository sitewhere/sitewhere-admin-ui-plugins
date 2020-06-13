<template>
  <rdb-datastore-dialog
    ref="dialog"
    title="Update Relational Datastore"
    createLabel="Update"
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
export default class RdbDatastoreUpdateDialog extends Vue {
  @Prop() readonly instance!: IInstanceConfiguration;
  @Ref() readonly dialog!: RdbDatastoreDialog;

  /** Emit payload */
  onPayload(definition: IDatastoreDefinition): void {
    this.dialog.closeDialog();
    this.$emit("update", definition);
  }

  /** Open dialog */
  openDialog(definition: IDatastoreDefinition): void {
    this.dialog.openDialog();
    this.dialog.load(definition);
  }
}
</script>

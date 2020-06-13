<template>
  <div>
    <v-card flat v-if="datastore">
      <v-card flat class="mb-5" v-if="datastoreReference">
        <v-icon small class="mr-2">fa-globe</v-icon>Configured globally as
        <strong>{{ datastoreReference }}</strong>.
      </v-card>
      <postgres-95-summary v-if="isPostgres95" :configuration="configuration" />
      <content-link
        class="mt-5 mb-2"
        icon="fa-edit"
        text="Update datastore settings"
        @linkClicked="onUpdateDatastore"
      />
      <content-link icon="fa-trash" text="Unset datastore" @linkClicked="onUnsetDatastore" />
    </v-card>
    <v-card flat v-else>
      <content-warning text="No datastore is set. This will cause tenant engine startup to fail!" />
      <content-link
        class="mt-3"
        icon="fa-plus-circle"
        text="Add datastore information."
        @linkClicked="onAddDatastore"
      />
    </v-card>
    <rdb-datastore-create-dialog :instance="instance" ref="create" @create="onDatastoreCreate" />
    <rdb-datastore-update-dialog :instance="instance" ref="update" @update="onDatastoreUpdate" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Ref } from "vue-property-decorator";

import { VCard, VIcon } from "vuetify/lib";
import { ContentLink, ContentWarning } from "sitewhere-ide-components";

import {
  IDatastoreDefinition,
  IDatastoreDefinitionLocal,
  IDatastoreDefinitionReference
} from "sitewhere-configuration-model";
import {
  IInstanceConfiguration,
  IRdbConfigurationMap,
  IRdbConfiguration
} from "sitewhere-rest-api";

import RdbDatastoreCreateDialog from "./RdbDatastoreCreateDialog.vue";
import RdbDatastoreUpdateDialog from "./RdbDatastoreUpdateDialog.vue";
import Postgres95Summary from "./postgres95/Postgres95Summary.vue";

@Component({
  components: {
    VCard,
    VIcon,
    ContentLink,
    ContentWarning,
    RdbDatastoreCreateDialog,
    RdbDatastoreUpdateDialog,
    Postgres95Summary
  }
})
export default class RdbDatastoreSelector extends Vue {
  @Prop() readonly datastore!: IDatastoreDefinition;
  @Prop() readonly instance!: IInstanceConfiguration;
  @Ref() readonly create!: RdbDatastoreCreateDialog;
  @Ref() readonly update!: RdbDatastoreUpdateDialog;

  /** Global RDB configurations */
  get rdbConfigurations(): IRdbConfigurationMap | null {
    return this.instance && this.instance.persistenceConfigurations
      ? this.instance.persistenceConfigurations.rdbConfigurations
      : null;
  }

  /** Get reference name */
  get datastoreReference(): string | null {
    return this.datastore
      ? (this.datastore as IDatastoreDefinitionReference).reference
      : null;
  }

  /** Local or global datastore type */
  get datastoreType(): string | null {
    const reference = this.datastoreReference;
    if (reference) {
      const global: IDatastoreDefinition | null = this.findGlobalDefinition(
        reference
      );
      return global ? global.type : null;
    }
    return this.datastore
      ? (this.datastore as IDatastoreDefinitionLocal).type
      : null;
  }

  /** Local or global datastore configuration */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  get configuration(): any {
    const reference = this.datastoreReference;
    if (reference) {
      const global: IDatastoreDefinition | null = this.findGlobalDefinition(
        reference
      );
      return global ? global.configuration : null;
    }
    return this.datastore
      ? (this.datastore as IDatastoreDefinitionLocal).configuration
      : null;
  }

  /** Postgres95 datastore */
  get isPostgres95(): boolean {
    return this.datastoreType ? this.datastoreType == "postgres95" : false;
  }

  /** Find a referenced persistence configuration */
  findGlobalDefinition(reference: string): IDatastoreDefinitionLocal | null {
    if (!this.rdbConfigurations) {
      return null;
    }
    const match: IRdbConfiguration = this.rdbConfigurations[reference];
    if (!match) {
      return null;
    }
    return {
      type: match.type,
      configuration: match.configuration
    };
  }

  /** Add datastore */
  onAddDatastore() {
    this.create.openDialog();
  }

  /** Called to create datastore based on UI data */
  onDatastoreCreate(definition: IDatastoreDefinition) {
    this.$emit("create", definition);
  }

  /** Update datastore */
  onUpdateDatastore() {
    this.update.openDialog(this.datastore);
  }

  /** Called to update datastore based on UI data */
  onDatastoreUpdate(definition: IDatastoreDefinition) {
    this.$emit("update", definition);
  }

  /** Unset datastore */
  onUnsetDatastore() {
    this.$emit("unset");
  }
}
</script>

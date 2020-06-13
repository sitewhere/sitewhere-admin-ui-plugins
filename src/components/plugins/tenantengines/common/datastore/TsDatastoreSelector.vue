<template>
  <div>
    <v-card flat v-if="datastore">
      <v-card flat class="mb-5" v-if="datastoreReference">
        <v-icon small class="mr-2">fa-globe</v-icon>Configured globally as
        <strong>{{ datastoreReference }}</strong>.
      </v-card>
      <warp-10-summary v-if="isWarp10" :configuration="configuration" />
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
    <ts-datastore-create-dialog :instance="instance" ref="create" @create="onDatastoreCreate" />
    <ts-datastore-update-dialog :instance="instance" ref="update" @update="onDatastoreUpdate" />
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
  ITimeSeriesConfigurationMap,
  ITimeSeriesConfiguration
} from "sitewhere-rest-api";

import TsDatastoreCreateDialog from "./TsDatastoreCreateDialog.vue";
import TsDatastoreUpdateDialog from "./TsDatastoreUpdateDialog.vue";
import Warp10Summary from "./warp10/Warp10Summary.vue";

@Component({
  components: {
    VCard,
    VIcon,
    ContentLink,
    ContentWarning,
    TsDatastoreCreateDialog,
    TsDatastoreUpdateDialog,
    Warp10Summary
  }
})
export default class TsDatastoreSelector extends Vue {
  @Prop() readonly datastore!: IDatastoreDefinition;
  @Prop() readonly instance!: IInstanceConfiguration;
  @Ref() readonly create!: TsDatastoreCreateDialog;
  @Ref() readonly update!: TsDatastoreUpdateDialog;

  /** Global time series configurations */
  get timeSeriesConfigurations(): ITimeSeriesConfigurationMap | null {
    return this.instance && this.instance.persistenceConfigurations
      ? this.instance.persistenceConfigurations.timeSeriesConfigurations
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

  /** Warp 10 datastore */
  get isWarp10(): boolean {
    return this.datastoreType ? this.datastoreType == "warp10" : false;
  }

  /** Find a referenced persistence configuration */
  findGlobalDefinition(reference: string): IDatastoreDefinitionLocal | null {
    if (!this.timeSeriesConfigurations) {
      return null;
    }
    const match: ITimeSeriesConfiguration = this.timeSeriesConfigurations[
      reference
    ];
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

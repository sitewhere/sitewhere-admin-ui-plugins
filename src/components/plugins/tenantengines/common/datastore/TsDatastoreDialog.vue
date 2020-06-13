<template>
  <base-dialog
    ref="dialog"
    :icon="icon"
    :title="title"
    width="550"
    :loaded="true"
    :visible="dialogVisible"
    :createLabel="createLabel"
    cancelLabel="Cancel"
    @createClicked="onCreateClicked"
    @cancelClicked="onCancelClicked"
  >
    <dialog-header>
      <v-layout class="pl-3 pr-3 pt-0 pb-0" row wrap>
        <v-flex xs4>
          <v-btn-toggle mandatory class="mt-3" v-model="scope">
            <v-btn text>Local</v-btn>
            <v-btn text>Global</v-btn>
          </v-btn-toggle>
        </v-flex>
        <v-flex xs8 v-if="isLocalScope">
          <v-select
            class="ml-3"
            :required="true"
            title="Choose database type"
            label="Database Type"
            :items="databaseTypes"
            v-model="type"
            item-text="text"
            item-value="value"
            prepend-icon="fa-database"
            placeholder=" "
          />
        </v-flex>
        <v-flex xs8 v-else>
          <v-select
            class="ml-3"
            :required="true"
            title="Choose global database reference"
            label="Global Reference"
            :items="globalDatabases"
            v-model="reference"
            item-text="text"
            item-value="value"
            prepend-icon="fa-database"
            placeholder=" "
          />
        </v-flex>
      </v-layout>
    </dialog-header>
    <v-divider class="mb-2" />
    <warp-10-fields v-if="isWarp10" :readonly="isGlobalScope" ref="details" />
  </base-dialog>
</template>

<script lang="ts">
import { Component, Ref, Prop, Watch } from "vue-property-decorator";
import { NavigationIcon } from "sitewhere-ide-common";
import {
  DialogComponent,
  DialogSection,
  DialogHeader,
  BaseDialog
} from "sitewhere-ide-components";

import Warp10Fields from "./warp10/Warp10Fields.vue";

import {
  VLayout,
  VFlex,
  VBtnToggle,
  VBtn,
  VSelect,
  VDivider
} from "vuetify/lib";

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

@Component({
  components: {
    BaseDialog,
    DialogHeader,
    VLayout,
    VFlex,
    VBtnToggle,
    VBtn,
    VSelect,
    VDivider,
    Warp10Fields
  }
})
export default class RdbDatastoreDialog extends DialogComponent<
  IDatastoreDefinition
> {
  @Prop() readonly instance!: IInstanceConfiguration;
  @Prop() readonly title!: string;
  @Prop() readonly createLabel!: string;
  @Ref() readonly dialog!: BaseDialog;
  @Ref() readonly details!: Warp10Fields;

  scope = 0;
  reference: string | null = null;
  type = "warp10";
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  configuration: any;

  /** List of supported database types */
  databaseTypes: { text: string; value: string }[] = [
    {
      text: "Warp 10",
      value: "warp10"
    },
    {
      text: "InfluxDB",
      value: "influxdb"
    }
  ];

  /** Convert to dialog */
  get dialogComponent(): BaseDialog {
    return this.dialog as BaseDialog;
  }

  /** Convert to dialog section */
  get detailsSection(): DialogSection {
    return this.details as DialogSection;
  }

  @Watch("scope")
  onScopeChanged() {
    if (!this.isLocalScope) {
      if (!this.reference) {
        const refs: { text: string; value: string }[] = this.globalDatabases;
        if (refs.length) {
          this.reference = refs[0].value;
        }
      }
    }
    this.reloadDetails();
  }

  @Watch("reference")
  onReferenceChanged() {
    this.reloadDetails();
  }

  /** Get icon for dialog */
  get icon(): NavigationIcon {
    return NavigationIcon.Datastore;
  }

  /** Indicates if local scope is chosen */
  get isLocalScope(): boolean {
    return this.scope == 0;
  }

  /** Indicates if global scope is chosen */
  get isGlobalScope(): boolean {
    return this.scope == 1;
  }

  /** Global time series configurations */
  get timeSeriesConfigurations(): ITimeSeriesConfigurationMap | null {
    return this.instance && this.instance.persistenceConfigurations
      ? this.instance.persistenceConfigurations.rdbConfigurations
      : null;
  }

  /** Get list of available global time series databases */
  get globalDatabases(): { text: string; value: string }[] {
    const databases: { text: string; value: string }[] = [];
    if (this.timeSeriesConfigurations) {
      const keys: string[] = Object.keys(this.timeSeriesConfigurations);
      keys.forEach(key => {
        databases.push({ text: key, value: key });
      });
    }
    return databases;
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

  /** Local or global datastore type */
  getDatastoreType(): string | null {
    if (!this.isLocalScope && this.reference) {
      const global: IDatastoreDefinition | null = this.findGlobalDefinition(
        this.reference
      );
      return global ? global.type : null;
    }
    return this.type;
  }

  /** Local or global datastore configuration */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  getDatastoreConfiguration(): any {
    if (this.isLocalScope) {
      return this.configuration;
    } else if (this.reference) {
      const global: IDatastoreDefinition | null = this.findGlobalDefinition(
        this.reference
      );
      return global ? global.configuration : {};
    } else {
      throw new Error("Neither local nor reference!");
    }
  }

  /** Indicates whether database is Warp 10 */
  get isWarp10(): boolean {
    const type: string | null = this.getDatastoreType();
    return type == "warp10";
  }

  /** Indicates whether database is InfluxDB */
  get isInfluxDB(): boolean {
    const type: string | null = this.getDatastoreType();
    return type == "inlfuxdb";
  }

  /** Generate configuration from detail panel */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  generateConfiguration(): any {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const configuration: any = {};
    Object.assign(configuration, this.detailsSection.save());
    return configuration;
  }

  /** Generate payload from UI data */
  generatePayload(): IDatastoreDefinition {
    if (this.scope == 1 && this.reference) {
      return {
        reference: this.reference
      };
    } else {
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      const configuration: any = this.generateConfiguration();
      return { type: this.type, configuration: configuration };
    }
  }

  /** Reset dialog content to default */
  reset() {
    if (this.details) {
      this.detailsSection.reset();
    }
    this.dialogComponent.setActiveTab(0);
  }

  /** Load data from an existing configuration */
  load(payload: IDatastoreDefinition) {
    this.reset();
    this.type = (payload as IDatastoreDefinitionLocal).type || "postgres95";
    this.configuration =
      (payload as IDatastoreDefinitionLocal).configuration || {};
    this.reference = (payload as IDatastoreDefinitionReference).reference;
    this.scope = this.reference ? 1 : 0;
    this.reloadDetails();
  }

  /** Reload details panel based on updated configuration */
  reloadDetails() {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const config: any = this.getDatastoreConfiguration();
    if (this.details && config) {
      this.detailsSection.load(config);
    }
  }

  /** Called after create button is clicked */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
  onCreateClicked(e: any) {
    if (!this.detailsSection.validate()) {
      this.dialogComponent.setActiveTab(0);
      return;
    }

    const payload = this.generatePayload();
    this.$emit("payload", payload);
  }
}
</script>

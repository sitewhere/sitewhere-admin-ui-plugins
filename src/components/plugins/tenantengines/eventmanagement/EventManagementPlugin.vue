<template>
  <tenant-engine-plugin :configuration="configuration">
    <content-section icon="fa-database" title="Event Management Datastore">
      <ts-datastore-selector
        :datastore="datastore"
        :instance="instanceManagement"
        @create="onCreateDatastore"
        @update="onUpdateDatastore"
        @unset="onUnsetDatastore"
      />
    </content-section>
  </tenant-engine-plugin>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

import TenantEnginePlugin from "../TenantEnginePlugin.vue";
import TsDatastoreSelector from "../common/datastore/TsDatastoreSelector.vue";

import { ContentSection } from "sitewhere-ide-components";

import {
  ITenantEngineConfiguration,
  IInstanceConfiguration
} from "sitewhere-rest-api";
import {
  IEventManagementConfiguration,
  IDatastoreDefinition
} from "sitewhere-configuration-model";

@Component({
  components: { ContentSection, TenantEnginePlugin, TsDatastoreSelector }
})
export default class EventManagementPlugin extends Vue {
  @Prop() readonly configuration!: ITenantEngineConfiguration;

  /** Get tenant configuration for event management */
  get eventManagement(): IEventManagementConfiguration {
    return this.configuration ? this.configuration.tenantConfiguration : null;
  }

  /** Get instance configuraton information */
  get instanceManagement(): IInstanceConfiguration | null {
    return this.configuration ? this.configuration.instanceConfiguration : null;
  }

  /** Get datastore definition */
  get datastore(): IDatastoreDefinition | null {
    return this.eventManagement ? this.eventManagement.datastore : null;
  }

  /** Create new datastore */
  onCreateDatastore(definition: IDatastoreDefinition) {
    this.eventManagement.datastore = definition;
  }

  /** Update datastore */
  onUpdateDatastore(definition: IDatastoreDefinition) {
    this.eventManagement.datastore = definition;
    this.markDirty();
  }

  /** Unset the datastore */
  onUnsetDatastore(): void {
    if (this.eventManagement) {
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      (this.eventManagement as any).datastore = null;
      this.markDirty();
    }
  }

  /** Mark data as having been updated */
  markDirty(): void {
    this.$emit("dirty");
  }
}
</script>

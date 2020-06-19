<template>
  <tenant-engine-plugin :configuration="configuration">
    <content-section icon="fa-database" title="Schedule Management Datastore">
      <rdb-datastore-selector
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

import TenantEnginePlugin from "..//TenantEnginePlugin.vue";
import RdbDatastoreSelector from "../common/datastore/RdbDatastoreSelector.vue";

import { ContentSection } from "sitewhere-ide-components";

import { ITenantEngineConfiguration } from "sitewhere-rest-api";
import {
  IScheduleManagementConfiguration,
  IDatastoreDefinition
} from "sitewhere-configuration-model";
import { IInstanceConfiguration } from "sitewhere-rest-api";

@Component({
  components: { ContentSection, TenantEnginePlugin, RdbDatastoreSelector }
})
export default class ScheduleManagementPlugin extends Vue {
  @Prop() readonly configuration!: ITenantEngineConfiguration;

  /** Get tenant configuration for schedule management */
  get scheduleManagement(): IScheduleManagementConfiguration {
    return this.configuration ? this.configuration.tenantConfiguration : null;
  }

  /** Get instance configuraton information */
  get instanceManagement(): IInstanceConfiguration | null {
    return this.configuration ? this.configuration.instanceConfiguration : null;
  }

  /** Get datastore definition */
  get datastore(): IDatastoreDefinition | null {
    return this.scheduleManagement ? this.scheduleManagement.datastore : null;
  }

  /** Create new datastore */
  onCreateDatastore(definition: IDatastoreDefinition) {
    this.scheduleManagement.datastore = definition;
  }

  /** Update datastore */
  onUpdateDatastore(definition: IDatastoreDefinition) {
    this.scheduleManagement.datastore = definition;
    this.markDirty();
  }

  /** Unset the datastore */
  onUnsetDatastore(): void {
    if (this.scheduleManagement) {
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      (this.scheduleManagement as any).datastore = null;
      this.markDirty();
    }
  }

  /** Mark data as having been updated */
  markDirty(): void {
    this.$emit("dirty");
  }
}
</script>
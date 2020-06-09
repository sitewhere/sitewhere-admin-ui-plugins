<template>
  <tenant-engine-plugin :configuration="configuration">
    <content-section icon="fa-database" title="Device State Datastore">
      <datastore-selector
        :datastore="datastore"
        :instance="instanceManagement"
        @create="onCreateDatastore"
        @update="onUpdateDatastore"
        @unsetDatastore="onUnsetDatastore"
      />
    </content-section>
  </tenant-engine-plugin>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

import TenantEnginePlugin from "..//TenantEnginePlugin.vue";
import DatastoreSelector from "../common/DatastoreSelector.vue";

import { ContentSection } from "sitewhere-ide-components";

import { ITenantEngineConfiguration } from "sitewhere-rest-api";
import {
  IDeviceStateConfiguration,
  IDatastoreDefinition
} from "sitewhere-configuration-model";
import { IInstanceConfiguration } from "sitewhere-rest-api";

@Component({
  components: { ContentSection, TenantEnginePlugin, DatastoreSelector }
})
export default class DeviceStatePlugin extends Vue {
  @Prop() readonly configuration!: ITenantEngineConfiguration;

  /** Get tenant configuration for device state */
  get deviceState(): IDeviceStateConfiguration {
    return this.configuration ? this.configuration.tenantConfiguration : null;
  }

  /** Get instance configuraton information */
  get instanceManagement(): IInstanceConfiguration | null {
    return this.configuration ? this.configuration.instanceConfiguration : null;
  }

  /** Get datastore definition */
  get datastore(): IDatastoreDefinition | null {
    return this.deviceState ? this.deviceState.datastore : null;
  }

  /** Create new datastore */
  onCreateDatastore(definition: IDatastoreDefinition) {
    this.deviceState.datastore = definition;
  }

  /** Update datastore */
  onUpdateDatastore(definition: IDatastoreDefinition) {
    this.deviceState.datastore = definition;
    this.markDirty();
  }

  /** Unset the datastore */
  onUnsetDatastore(): void {
    if (this.deviceState) {
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      (this.deviceState as any).datastore = null;
      this.markDirty();
    }
  }

  /** Mark data as having been updated */
  markDirty(): void {
    this.$emit("dirty");
  }
}
</script>
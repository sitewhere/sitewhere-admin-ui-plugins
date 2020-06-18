<template>
  <tenant-engine-plugin :configuration="configuration">
    <label-generators-table
      :tenantId="tenantId"
      :generators="labelGenerators"
      @create="onLabelGeneratorCreated"
      @update="onLabelGeneratorUpdated"
      @delete="onLabelGeneratorDeleted"
    />
  </tenant-engine-plugin>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

import TenantEnginePlugin from "../TenantEnginePlugin.vue";
import LabelGeneratorsTable from "./LabelGeneratorsTable.vue";

import { ITenantEngineConfiguration } from "sitewhere-rest-api";
import {
  ILabelGenerationConfiguration,
  ILabelGeneratorGenericConfiguration
} from "sitewhere-configuration-model";

@Component({
  components: {
    TenantEnginePlugin,
    LabelGeneratorsTable
  }
})
export default class LabelGenerationPlugin extends Vue {
  @Prop() readonly configuration!: ITenantEngineConfiguration;

  /** Tenant id */
  get tenantId(): string | null {
    return this.configuration ? this.configuration.tenant.token : null;
  }

  /** Get tenant configuration for label generation */
  get labelGenerationConfiguration(): ILabelGenerationConfiguration {
    return this.configuration ? this.configuration.tenantConfiguration : null;
  }

  /** Get label generators list */
  get labelGenerators(): ILabelGeneratorGenericConfiguration[] | null {
    return this.labelGenerationConfiguration
      ? this.labelGenerationConfiguration.generators
      : null;
  }

  /** Handle label generator created */
  onLabelGeneratorCreated(
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    config: ILabelGeneratorGenericConfiguration
  ): void {
    this.markDirty();
  }

  /** Handle label generator updated */
  onLabelGeneratorUpdated(
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    originalId: string,
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    config: ILabelGeneratorGenericConfiguration
  ): void {
    this.markDirty();
  }

  /** Handle label generator deleted */
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  onLabelGeneratorDeleted(id: string): void {
    this.markDirty();
  }

  /** Mark data as having been updated */
  markDirty(): void {
    this.$emit("dirty");
  }
}
</script>

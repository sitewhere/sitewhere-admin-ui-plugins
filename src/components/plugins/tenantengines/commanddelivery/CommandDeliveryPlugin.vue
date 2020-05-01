<template>
  <tenant-engine-plugin :configuration="configuration">
    <command-destinations-table
      :tenantId="tenantId"
      :commandDestinations="commandDestinations"
      @create="onCommandDestinationCreated"
      @update="onCommandDestinationUpdated"
      @delete="onCommandDestinationDeleted"
    />
    <v-divider class="mt-4 mb-4" />
    <command-router-section
      :router="router"
      :commandDestinations="commandDestinations"
      @unset="onUnsetCommandRouter"
    />
  </tenant-engine-plugin>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { MicroserviceIcon } from "sitewhere-ide-common";

import TenantEnginePlugin from "../TenantEnginePlugin.vue";
import CommandDestinationsTable from "./CommandDestinationsTable.vue";
import CommandRouterSection from "./CommandRouterSection.vue";

import { ITenantEngineConfiguration } from "sitewhere-rest-api";
import {
  ICommandDeliveryConfiguration,
  ICommandDestinationGenericConfiguration,
  IRouterGenericConfiguration
} from "sitewhere-configuration-model";
import { IInstanceConfiguration } from "sitewhere-rest-api";

@Component({
  components: {
    TenantEnginePlugin,
    CommandDestinationsTable,
    CommandRouterSection
  }
})
export default class CommandDeliveryPlugin extends Vue {
  @Prop() readonly configuration!: ITenantEngineConfiguration;

  /** Get page icon */
  get icon(): MicroserviceIcon {
    return MicroserviceIcon.EventSources;
  }

  /** Tenant id */
  get tenantId(): string | null {
    return this.configuration ? this.configuration.tenant.token : null;
  }

  /** Get tenant configuration for command delivery */
  get commandDeliveryConfiguration(): ICommandDeliveryConfiguration {
    return this.configuration ? this.configuration.tenantConfiguration : null;
  }

  /** Get instance configuraton information */
  get instanceManagement(): IInstanceConfiguration | null {
    return this.configuration ? this.configuration.instanceConfiguration : null;
  }

  /** Get command destinations list */
  get commandDestinations(): ICommandDestinationGenericConfiguration[] | null {
    return this.commandDeliveryConfiguration
      ? this.commandDeliveryConfiguration.commandDestinations
      : null;
  }

  /** Get configured router */
  get router(): IRouterGenericConfiguration | null {
    return this.commandDeliveryConfiguration
      ? this.commandDeliveryConfiguration.router
      : null;
  }

  /** Handle command destination created */
  onCommandDestinationCreated(
    config: ICommandDestinationGenericConfiguration
  ): void {
    this.markDirty();
  }

  /** Handle command destination updated */
  onCommandDestinationUpdated(
    originalId: string,
    config: ICommandDestinationGenericConfiguration
  ): void {
    this.markDirty();
  }

  /** Handle command destination deleted */
  onCommandDestinationDeleted(id: string): void {
    this.markDirty();
  }

  /** Handle unsetting router */
  onUnsetCommandRouter(): void {
    if (this.commandDeliveryConfiguration) {
      (this.commandDeliveryConfiguration as any).router = null;
    }
    this.markDirty();
  }

  /** Mark data as having been updated */
  markDirty(): void {
    this.$emit("dirty");
  }
}
</script>

<style scoped></style>

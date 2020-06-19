<template>
  <tenant-engine-plugin :configuration="configuration">
    <outbound-connectors-table
      :tenantId="tenantId"
      :connectors="outboundConnectors"
      @create="onOutboundConnectorCreated"
      @update="onOutboundConnectorUpdated"
      @delete="onOutboundConnectorDeleted"
    />
  </tenant-engine-plugin>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { MicroserviceIcon } from "sitewhere-ide-common";

import TenantEnginePlugin from "../TenantEnginePlugin.vue";
import OutboundConnectorsTable from "./OutboundConnectorsTable.vue";

import { ITenantEngineConfiguration } from "sitewhere-rest-api";
import {
  IOutboundConnectorsConfiguration,
  IOutboundConnectorGenericConfiguration
} from "sitewhere-configuration-model";
import { IInstanceConfiguration } from "sitewhere-rest-api";

@Component({
  components: { TenantEnginePlugin, OutboundConnectorsTable }
})
export default class OutboundConnectorsPlugin extends Vue {
  @Prop() readonly configuration!: ITenantEngineConfiguration;

  /** Get page icon */
  get icon(): MicroserviceIcon {
    return MicroserviceIcon.EventSources;
  }

  /** Tenant id */
  get tenantId(): string | null {
    return this.configuration ? this.configuration.tenant.token : null;
  }

  /** Get tenant configuration for outbound connectors */
  get connectorsConfiguration(): IOutboundConnectorsConfiguration {
    return this.configuration ? this.configuration.tenantConfiguration : null;
  }

  /** Get instance configuraton information */
  get instanceManagement(): IInstanceConfiguration | null {
    return this.configuration ? this.configuration.instanceConfiguration : null;
  }

  /** Get outbound connectors list */
  get outboundConnectors(): IOutboundConnectorGenericConfiguration[] | null {
    return this.connectorsConfiguration
      ? this.connectorsConfiguration.outboundConnectors
      : null;
  }

  /** Handle outbound connector created */
  onOutboundConnectorCreated(
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    config: IOutboundConnectorGenericConfiguration
  ): void {
    this.markDirty();
  }

  /** Handle outbound connector updated */
  onOutboundConnectorUpdated(
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    originalId: string,
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    config: IOutboundConnectorGenericConfiguration
  ): void {
    this.markDirty();
  }

  /** Handle event source deleted */
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  onOutboundConnectorDeleted(id: string): void {
    this.markDirty();
  }

  /** Mark data as having been updated */
  markDirty(): void {
    this.$emit("dirty");
  }
}
</script>

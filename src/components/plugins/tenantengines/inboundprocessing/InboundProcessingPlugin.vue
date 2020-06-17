<template>
  <tenant-engine-plugin :configuration="configuration">
    <content-section icon="fa-cogs" title="Inbound Processing">
      <section-overview class="mb-5" title="Configure Inbound Processing Settings">
        The following settings may be adjusted to configure
        how inbound decoded events are processed and forwarded
        to other microservices.
      </section-overview>
      <v-card tile flat color="transparent" style="width: 50%">
        <v-text-field label="Processing thread count" v-model="processingThreadCount" />
      </v-card>
    </content-section>
  </tenant-engine-plugin>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

import TenantEnginePlugin from "../TenantEnginePlugin.vue";

import { ContentSection, SectionOverview } from "sitewhere-ide-components";
import { VCard, VTextField } from "vuetify/lib";

import { ITenantEngineConfiguration } from "sitewhere-rest-api";
import { IInboundProcessingConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    VCard,
    VTextField,
    ContentSection,
    TenantEnginePlugin,
    SectionOverview
  }
})
export default class InboundProcessingPlugin extends Vue {
  @Prop() readonly configuration!: ITenantEngineConfiguration;

  processingThreadCount = 10;

  /** Get tenant configuration for inbound processing */
  get inboundProcessing(): IInboundProcessingConfiguration {
    return this.configuration ? this.configuration.tenantConfiguration : null;
  }

  @Watch("inboundProcessing", { immediate: true })
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  onConfigurationUpdated(updated: IInboundProcessingConfiguration) {
    this.processingThreadCount = updated.processingThreadCount;
  }

  @Watch("processingThreadCount")
  onProcessingThreadCountUpdated(updated: number) {
    this.inboundProcessing.processingThreadCount = updated;
    this.markDirty();
  }

  /** Mark data as having been updated */
  markDirty(): void {
    this.$emit("dirty");
  }
}
</script>

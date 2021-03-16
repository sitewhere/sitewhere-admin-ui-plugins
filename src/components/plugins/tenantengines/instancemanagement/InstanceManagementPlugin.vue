<template>
  <tenant-engine-plugin :configuration="configuration">
    <content-section icon="fa-bug" title="Instance Debugging Configuration">
      <section-overview title="Event Pipeline Debugging">
        Event pipeline debugging is used to track events in the processing
        pipeline across multiple microservices in order to understand how events
        are processed at a low level.
      </section-overview>
      <v-card flat width="60%">
        <form-text
          style="width: 50%"
          required
          label="Event History Length"
          title="Number of entries retained for event pipeline history."
          v-model="eventPipelineHistoryLength"
          icon="history"
      /></v-card>
    </content-section>
  </tenant-engine-plugin>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

import { VCard } from "vuetify/lib";

import TenantEnginePlugin from "../TenantEnginePlugin.vue";
import {
  ContentSection,
  SectionOverview,
  FormText,
} from "sitewhere-ide-components";

import { ITenantEngineConfiguration } from "sitewhere-rest-api";
import { IInstanceManagementConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    TenantEnginePlugin,
    ContentSection,
    SectionOverview,
    FormText,
    VCard
  },
})
export default class InstanceManagementPlugin extends Vue {
  @Prop() readonly configuration!: ITenantEngineConfiguration;

  /** Tenant id */
  get tenantId(): string | null {
    return this.configuration ? this.configuration.tenant.token : null;
  }

  /** Get tenant configuration for instance management */
  get instanceManagementConfiguration(): IInstanceManagementConfiguration {
    return this.configuration ? this.configuration.tenantConfiguration : null;
  }

  /** Get label generators list */
  get eventPipelineHistoryLength(): number | null {
    return this.instanceManagementConfiguration
      ? this.instanceManagementConfiguration.eventPipelineHistoryLength
      : null;
  }

  set eventPipelineHistoryLength(value: number | null) {
    if (this.instanceManagementConfiguration) {
      if (value) {
        this.instanceManagementConfiguration.eventPipelineHistoryLength = value;
        this.markDirty();
      }
    }
  }

  /** Mark data as having been updated */
  markDirty(): void {
    this.$emit("dirty");
  }
}
</script>

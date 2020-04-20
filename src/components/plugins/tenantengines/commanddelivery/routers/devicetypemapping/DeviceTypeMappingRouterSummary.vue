<template>
  <v-card flat>
    <div>Device Type Mapping Router</div>
    <v-divider class="mt-2 mb-3" style="width: 50%" />
    <v-card flat class="mb-3" v-if="hasMappings">
      <sw-content-field
        :name="mapping.token"
        :value="mappings[mapping.token]"
        :alt="index % 2 == 1"
        v-for="(mapping, index) in mappings"
        :key="mapping.token"
      />
    </v-card>
    <v-card flat class="mb-3" v-else>No mappings have been assigned.</v-card>
    <v-card flat class="mb-4" v-if="defaultDestination">
      <sw-content-field
        name="default destination"
        :value="defaultDestination"
      />
    </v-card>
    <v-card flat class="mb-4" v-else>
      <sw-content-warning
        text="No default destination is set. This will cause tenant engine startup to fail!"
      />
    </v-card>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "sitewhere-ide-common";
import {
  IRouterGenericConfiguration,
  IDeviceTypeMappingRouterConfiguration,
  IDeviceTypeMapping,
} from "sitewhere-configuration-model";

@Component({})
export default class DeviceTypeMappingRouterSummary extends Vue {
  @Prop() readonly router!: IRouterGenericConfiguration;

  /** Get device type mapping router configuration */
  get configuration(): IDeviceTypeMappingRouterConfiguration | null {
    return this.router
      ? (this.router.configuration as IDeviceTypeMappingRouterConfiguration)
      : null;
  }

  /** Indicates if there are mappings */
  get hasMappings(): boolean {
    return this.mappings ? this.mappings.length > 0 : false;
  }

  /** Current list of device type mappings */
  get mappings(): IDeviceTypeMapping[] | null {
    return this.configuration ? this.configuration.mappings : null;
  }

  /** Get default destination */
  get defaultDestination(): string | null {
    return this.configuration ? this.configuration.defaultDestination : null;
  }
}
</script>

<style scoped></style>

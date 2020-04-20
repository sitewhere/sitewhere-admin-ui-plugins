<template>
  <v-card flat>
    <default-mqtt-parameter-extractor-configuration
      ref="details"
      v-if="extractorType == 'mqtt-default'"
    />
  </v-card>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  DialogSection,
  Refs,
  Watch,
} from "sitewhere-ide-common";

import DefaultMqttParameterExtractorConfiguration from "./mqtt/DefaultMqttParameterExtractorConfiguration.vue";
import { IParameterExtractorGenericConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    DefaultMqttParameterExtractorConfiguration,
  },
})
export default class ParameterExtractorConfiguration extends DialogSection {
  @Prop() readonly tenantId!: string;
  @Prop() readonly parameterExtractor!: IParameterExtractorGenericConfiguration;

  // References.
  $refs!: Refs<{
    details: DialogSection;
  }>;

  @Watch("extractorType", { immediate: true })
  onExtractorTypeUpdated(updated: string) {
    this.load(this.parameterExtractor);
  }

  /** Parameter extractor type */
  get extractorType(): string | null {
    return this.parameterExtractor ? this.parameterExtractor.type : null;
  }

  /** Reset section content */
  reset(): void {
    if (this.$refs.details) {
      this.$refs.details.reset();
    }
  }

  /** Perform validation */
  validate(): boolean {
    if (this.$refs.details) {
      if (!this.$refs.details.validate()) {
        return false;
      }
    }
    return true;
  }

  /** Load form data from an object */
  load(input: IParameterExtractorGenericConfiguration): void {
    this.$nextTick().then(() => {
      if (this.$refs.details) {
        this.$refs.details.load(input.configuration);
      }
    });
  }

  /** Save form data to an object */
  save(): {} {
    let config: any = {};
    if (this.$refs.details) {
      Object.assign(config, this.$refs.details.save());
    }
    return config;
  }
}
</script>

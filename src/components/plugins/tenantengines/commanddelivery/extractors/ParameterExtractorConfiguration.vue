<template>
  <v-card flat>
    <default-mqtt-parameter-extractor-configuration
      ref="details"
      v-if="extractorType == 'mqtt-default'"
    />
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Ref, Watch } from "vue-property-decorator";
import { DialogSection } from "sitewhere-ide-components";

import DefaultMqttParameterExtractorConfiguration from "./mqtt/DefaultMqttParameterExtractorConfiguration.vue";
import { IParameterExtractorGenericConfiguration } from "sitewhere-configuration-model";
import { Validation } from "vuelidate";

@Component({
  components: {
    DefaultMqttParameterExtractorConfiguration
  }
})
export default class ParameterExtractorConfiguration extends DialogSection {
  @Prop() readonly tenantId!: string;
  @Prop() readonly parameterExtractor!: IParameterExtractorGenericConfiguration;
  @Ref() readonly details!: DialogSection;

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
    if (this.details) {
      (this.details as any).reset();
    }
  }

  /** Perform validation */
  validate(): boolean {
    if (this.details) {
      if (!(this.details as any).validate()) {
        return false;
      }
    }
    return true;
  }

  /** Load form data from an object */
  load(input: IParameterExtractorGenericConfiguration): void {
    this.$nextTick().then(() => {
      if (this.details) {
        (this.details as any).load(input.configuration);
      }
    });
  }

  /** Save form data to an object */
  save(): {} {
    let config: any = {};
    if (this.details) {
      Object.assign(config, (this.details as any).save());
    }
    return config;
  }
}
</script>

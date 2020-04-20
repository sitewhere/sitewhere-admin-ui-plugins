<template>
  <default-mqtt-parameter-extractor-fields ref="fields" :tenantId="tenantId" />
</template>

<script lang="ts">
import { Component, Prop, DialogSection, Refs } from "sitewhere-ide-common";

import DefaultMqttParameterExtractorFields from "./DefaultMqttParameterExtractorFields.vue";

@Component({
  components: {
    DefaultMqttParameterExtractorFields,
  },
})
export default class DefaultMqttParameterExtractorConfiguration extends DialogSection {
  @Prop() readonly tenantId!: string;

  // References.
  $refs!: Refs<{
    fields: DefaultMqttParameterExtractorFields;
  }>;

  /** Reset section content */
  reset(): void {
    if (this.$refs.fields) {
      this.$refs.fields.reset();
    }
  }

  /** Perform validation */
  validate(): boolean {
    if (!this.$refs.fields.validate()) {
      return false;
    }
    return true;
  }

  /** Load form data from an object */
  load(input: any): void {
    this.reset();
    if (this.$refs.fields) {
      this.$refs.fields.load(input);
    }
  }

  /** Save form data to an object */
  save(): {} {
    let payload: any = {};

    if (this.$refs.fields) {
      Object.assign(payload, this.$refs.fields.save());
    }

    return payload;
  }
}
</script>

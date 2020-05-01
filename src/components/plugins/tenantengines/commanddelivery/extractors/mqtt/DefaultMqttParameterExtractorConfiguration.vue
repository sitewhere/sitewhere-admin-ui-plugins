<template>
  <default-mqtt-parameter-extractor-fields ref="fields" :tenantId="tenantId" />
</template>

<script lang="ts">
import { Component, Prop, Ref } from "vue-property-decorator";
import { DialogSection } from "sitewhere-ide-components";

import DefaultMqttParameterExtractorFields from "./DefaultMqttParameterExtractorFields.vue";

@Component({
  components: {
    DefaultMqttParameterExtractorFields
  }
})
export default class DefaultMqttParameterExtractorConfiguration extends DialogSection {
  @Prop() readonly tenantId!: string;
  @Ref() readonly fields!: DefaultMqttParameterExtractorFields;

  /** Reset section content */
  reset(): void {
    if (this.fields) {
      (this.fields as any).reset();
    }
  }

  /** Perform validation */
  validate(): boolean {
    if (!(this.fields as any).validate()) {
      return false;
    }
    return true;
  }

  /** Load form data from an object */
  load(input: any): void {
    this.reset();
    if (this.fields) {
      (this.fields as any).load(input);
    }
  }

  /** Save form data to an object */
  save(): {} {
    let payload: any = {};

    if (this.fields) {
      Object.assign(payload, (this.fields as any).save());
    }

    return payload;
  }
}
</script>

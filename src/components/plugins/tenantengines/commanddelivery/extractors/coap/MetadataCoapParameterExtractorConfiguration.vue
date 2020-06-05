<template>
  <metadata-coap-parameter-extractor-fields ref="fields" :tenantId="tenantId" />
</template>

<script lang="ts">
import { Component, Prop, Ref } from "vue-property-decorator";
import { DialogSection } from "sitewhere-ide-components";

import MetadataCoapParameterExtractorFields from "./MetadataCoapParameterExtractorFields.vue";
import { IMetadataCoapParameterExtractorConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    MetadataCoapParameterExtractorFields
  }
})
export default class MetadataCoapParameterExtractorConfiguration extends DialogSection {
  @Prop() readonly tenantId!: string;
  @Ref() readonly fields!: MetadataCoapParameterExtractorFields;

  /** Reset section content */
  reset(): void {
    if (this.fields) {
      this.fields.reset();
    }
  }

  /** Perform validation */
  validate(): boolean {
    if (!this.fields.validate()) {
      return false;
    }
    return true;
  }

  /** Load form data from an object */
  load(input: IMetadataCoapParameterExtractorConfiguration): void {
    this.reset();
    if (this.fields) {
      this.fields.load(input);
    }
  }

  /** Save form data to an object */
  save(): IMetadataCoapParameterExtractorConfiguration {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const payload: any = {};
    if (this.fields) {
      Object.assign(payload, this.fields.save());
    }

    return payload;
  }
}
</script>

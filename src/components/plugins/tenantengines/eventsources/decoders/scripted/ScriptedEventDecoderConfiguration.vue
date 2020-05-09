<template>
  <scripted-event-decoder-fields ref="script" :tenantId="tenantId" />
</template>

<script lang="ts">
import { Component, Prop, Ref } from "vue-property-decorator";
import { DialogSection } from "sitewhere-ide-components";

import ScriptedEventDecoderFields from "./ScriptedEventDecoderFields.vue";

@Component({
  components: {
    ScriptedEventDecoderFields
  }
})
export default class ScriptedEventDecoderConfiguration extends DialogSection {
  @Prop() readonly tenantId!: string;
  @Ref() readonly script!: ScriptedEventDecoderFields;

  /** Reset section content */
  reset(): void {
    if (this.script) {
      this.script.reset();
    }
  }

  /** Perform validation */
  validate(): boolean {
    if (!this.script.validate()) {
      return false;
    }
    return true;
  }

  /** Load form data from an object */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  load(input: any): void {
    this.reset();
    if (this.script) {
      this.script.load(input);
    }
  }

  /** Save form data to an object */
  save(): {} {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const payload: any = {};

    if (this.script) {
      Object.assign(payload, this.script.save());
    }

    return payload;
  }
}
</script>

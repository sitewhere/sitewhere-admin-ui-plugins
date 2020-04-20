<template>
  <scripted-event-decoder-fields ref="script" :tenantId="tenantId" />
</template>

<script lang="ts">
import { Component, Prop, DialogSection, Refs } from "sitewhere-ide-common";

import ScriptedEventDecoderFields from "./ScriptedEventDecoderFields.vue";

@Component({
  components: {
    ScriptedEventDecoderFields
  }
})
export default class ScriptedEventDecoderConfiguration extends DialogSection {
  @Prop() readonly tenantId!: string;

  // References.
  $refs!: Refs<{
    script: ScriptedEventDecoderFields;
  }>;

  /** Reset section content */
  reset(): void {
    if (this.$refs.script) {
      (this.$refs.script as any).reset();
    }
  }

  /** Perform validation */
  validate(): boolean {
    if (!(this.$refs.script as any).validate()) {
      return false;
    }
    return true;
  }

  /** Load form data from an object */
  load(input: any): void {
    this.reset();
    if (this.$refs.script) {
      (this.$refs.script as any).load(input);
    }
  }

  /** Save form data to an object */
  save(): {} {
    let payload: any = {};

    if (this.$refs.script) {
      Object.assign(payload, (this.$refs.script as any).save());
    }

    return payload;
  }
}
</script>

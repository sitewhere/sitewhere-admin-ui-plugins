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
      (this.script as any).reset();
    }
  }

  /** Perform validation */
  validate(): boolean {
    if (!(this.script as any).validate()) {
      return false;
    }
    return true;
  }

  /** Load form data from an object */
  load(input: any): void {
    this.reset();
    if (this.script) {
      (this.script as any).load(input);
    }
  }

  /** Save form data to an object */
  save(): {} {
    let payload: any = {};

    if (this.script) {
      Object.assign(payload, (this.script as any).save());
    }

    return payload;
  }
}
</script>

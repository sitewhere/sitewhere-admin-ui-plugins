<template>
  <no-configuration />
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import { DialogSection } from "sitewhere-ide-components";

import NoConfiguration from "../NoConfiguration.vue";

@Component({
  components: {
    NoConfiguration
  }
})
export default class ProtobufDecoderConfiguration extends DialogSection {
  /** Reset section content */
  /* eslint-disable-next-line @typescript-eslint/no-empty-function */
  reset(): void {}

  /** Perform validation */
  validate(): boolean {
    return true;
  }

  /** Load form data from an object */
  /* eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
  load(input: any): void {}

  /** Save form data to an object */
  save(): {} {
    return {};
  }
}
</script>

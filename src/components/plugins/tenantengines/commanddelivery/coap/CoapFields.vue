<template>
  <sw-dialog-form>
    <no-configuration />
  </sw-dialog-form>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";

import { DialogSection, DialogForm } from "sitewhere-ide-components";
import NoConfiguration from "../NoConfiguration.vue";

import { ICoapCommandDestinationConfiguration } from "sitewhere-configuration-model";

@Component({
  components: { DialogForm, NoConfiguration }
})
export default class CoapFields extends DialogSection {
  /** Reset section content */
  reset(): void {
    this.$v.$reset();
  }

  /** Perform validation */
  validate(): boolean {
    this.$v.$touch();
    return !this.$v.$invalid;
  }

  /** Load form data from an object */
  /* eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars */
  load(input: ICoapCommandDestinationConfiguration): void {}

  /** Save form data to an object */
  save(): {} {
    return {};
  }
}
</script>

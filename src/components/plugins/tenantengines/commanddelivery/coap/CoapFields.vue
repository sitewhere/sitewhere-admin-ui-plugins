<template>
  <sw-dialog-form>
    <no-configuration />
  </sw-dialog-form>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import { DialogSection } from "sitewhere-ide-components";
import { ICoapCommandDestinationConfiguration } from "sitewhere-configuration-model";

import NoConfiguration from "../NoConfiguration.vue";

import { required } from "vuelidate/lib/validators";

@Component({
  components: {
    NoConfiguration
  },
  validations: {}
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
  load(input: ICoapCommandDestinationConfiguration): void {}

  /** Save form data to an object */
  save(): {} {
    return {};
  }
}
</script>

<template>
  <sw-dialog-form>
    <v-flex xs12>
      <sw-form-text
        required
        label="Throttle delay(ms)"
        title="Throttle delay in milliseconds."
        v-model="throttleDelayMs"
        icon="fa-clock"
        type="number"
      >
        <span v-if="!$v.throttleDelayMs.required && $v.$dirty">Throttle delay is required.</span>
      </sw-form-text>
    </v-flex>
  </sw-dialog-form>
</template>

<script lang="ts">
import { Component, DialogSection } from "sitewhere-ide-common";
import { IBatchOperationManagerConfiguration } from "sitewhere-configuration-model";

import { required } from "vuelidate/lib/validators";

@Component({
  validations: {
    throttleDelayMs: {
      required
    }
  }
})
export default class BatchOperationManagerFields extends DialogSection {
  throttleDelayMs: number = 0;

  /** Reset section content */
  reset(): void {
    this.throttleDelayMs = 0;
    this.$v.$reset();
  }

  /** Perform validation */
  validate(): boolean {
    this.$v.$touch();
    return !this.$v.$invalid;
  }

  /** Load form data from an object */
  load(input: IBatchOperationManagerConfiguration): void {
    console.log("load from", input);
    this.throttleDelayMs = input.throttleDelayMs || 0;
  }

  /** Save form data to an object */
  save(): IBatchOperationManagerConfiguration {
    return {
      throttleDelayMs: this.throttleDelayMs
    };
  }
}
</script>

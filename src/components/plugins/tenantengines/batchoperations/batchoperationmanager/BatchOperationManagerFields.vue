<template>
  <dialog-form>
    <v-flex xs12>
      <form-text
        required
        label="Throttle delay(ms)"
        title="Throttle delay in milliseconds."
        v-model="throttleDelayMs"
        icon="fa-clock"
        type="number"
      >
        <span v-if="!$v.throttleDelayMs.required && $v.$dirty">Throttle delay is required.</span>
      </form-text>
    </v-flex>
  </dialog-form>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import { IBatchOperationManagerConfiguration } from "sitewhere-configuration-model";

import { DialogSection, DialogForm, FormText } from "sitewhere-ide-components";
import { VFlex } from "vuetify/lib";

import { required } from "vuelidate/lib/validators";

@Component({
  components: { VFlex, DialogForm, FormText },
  validations: {
    throttleDelayMs: {
      required
    }
  }
})
export default class BatchOperationManagerFields extends DialogSection {
  throttleDelayMs = 0;

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

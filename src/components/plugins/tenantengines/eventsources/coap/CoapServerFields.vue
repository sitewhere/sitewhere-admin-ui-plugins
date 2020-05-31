<template>
  <dialog-form>
    <v-flex xs12>
      <form-text
        required
        label="Server port"
        title="CoAP server port."
        v-model="port"
        type="number"
      >
        <span v-if="!$v.port.required && $v.$dirty">Port is required.</span>
      </form-text>
    </v-flex>
  </dialog-form>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";

import { DialogSection, DialogForm, FormText } from "sitewhere-ide-components";
import { VFlex } from "vuetify/lib";

import { ICoapServerConfiguration } from "sitewhere-configuration-model";
import { required } from "vuelidate/lib/validators";

@Component({
  components: { VFlex, DialogForm, FormText },
  validations: {
    port: {
      required
    }
  }
})
export default class CoapServerFields extends DialogSection {
  port = 8583;

  /** Reset section content */
  reset(): void {
    this.port = 8583;
    this.$v.$reset();
  }

  /** Perform validation */
  validate(): boolean {
    this.$v.$touch();
    return !this.$v.$invalid;
  }

  /** Load form data from an object */
  load(input: ICoapServerConfiguration): void {
    this.port = input.port || 8583;
  }

  /** Save form data to an object */
  save(): {} {
    return {
      port: this.port
    };
  }
}
</script>

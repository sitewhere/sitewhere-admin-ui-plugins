<template>
  <dialog-form>
    <v-flex xs6>
      <form-text
        required
        label="Width"
        title="QR code image width in pixels."
        v-model="width"
        icon="info"
        type="number"
      >
        <span v-if="!$v.width.required && $v.$dirty">Width is required.</span>
      </form-text>
    </v-flex>
    <v-flex xs6>
      <form-text
        required
        label="Height"
        title="QR code image height in pixels."
        v-model="height"
        icon="info"
        type="number"
      >
        <span v-if="!$v.height.required && $v.$dirty">Height is required.</span>
      </form-text>
    </v-flex>
    <v-flex xs6>
      <color-input-field
        label="Foreground color"
        title="QR code foreground color."
        v-model="foregroundColor"
      />
    </v-flex>
    <v-flex xs6>
      <color-input-field
        label="Background color"
        title="QR code background color."
        v-model="backgroundColor"
      />
    </v-flex>
  </dialog-form>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";

import {
  DialogSection,
  DialogForm,
  FormText,
  ColorInputField
} from "sitewhere-ide-components";
import { VFlex } from "vuetify/lib";

import { IQrCodeGeneratorConfiguration } from "sitewhere-configuration-model";
import { required } from "vuelidate/lib/validators";

@Component({
  components: { DialogForm, FormText, VFlex, ColorInputField },
  validations: {
    width: {
      required
    },
    height: {
      required
    },
    foregroundColor: {
      required
    },
    backgroundColor: {
      required
    }
  }
})
export default class QrCodeGeneratorFields extends DialogSection {
  width = 200;
  height = 200;
  foregroundColor = "333333FF";
  backgroundColor = "FFFFFFFF";

  /** Reset section content */
  reset(): void {
    this.width = 200;
    this.height = 200;
    this.foregroundColor = "333333FF";
    this.backgroundColor = "FFFFFFFF";
    this.$v.$reset();
  }

  /** Perform validation */
  validate(): boolean {
    this.$v.$touch();
    return !this.$v.$invalid;
  }

  /** Load form data from an object */
  load(input: IQrCodeGeneratorConfiguration): void {
    this.width = input.width || 200;
    this.height = input.height || 200;
    this.foregroundColor = input.foregroundColor || "#333333FF";
    this.backgroundColor = input.backgroundColor || "#FFFFFFFF";
  }

  /** Save form data to an object */
  save(): {} {
    return {
      width: this.width,
      height: this.height,
      foregroundColor: this.foregroundColor,
      backgroundColor: this.backgroundColor
    };
  }
}
</script>

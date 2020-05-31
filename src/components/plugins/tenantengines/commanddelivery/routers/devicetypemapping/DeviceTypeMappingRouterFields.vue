<template>
  <dialog-form>
    <v-flex xs12>
      <form-select
        :items="deviceTypes"
        title="Choose default command destination"
        label="Default Destination"
        item-text="name"
        item-value="token"
        v-model="defaultDestination"
        icon="fa-check"
      />
    </v-flex>
  </dialog-form>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";

import { VFlex } from "vuetify/lib";
import {
  DialogSection,
  DialogForm,
  FormSelect
} from "sitewhere-ide-components";

import { IDeviceTypeMappingRouterConfiguration } from "sitewhere-configuration-model";
import { IDeviceType } from "sitewhere-rest-api";
import { required } from "vuelidate/lib/validators";

@Component({
  components: { VFlex, DialogSection, DialogForm, FormSelect },
  validations: {
    defaultDestination: {
      required
    }
  }
})
export default class DeviceTypeMappingRouterFields extends DialogSection {
  @Prop() readonly deviceTypes!: IDeviceType[];

  defaultDestination: string | null = null;

  /** Reset section content */
  reset(): void {
    this.defaultDestination = null;
    this.$v.$reset();
  }

  /** Perform validation */
  validate(): boolean {
    this.$v.$touch();
    return !this.$v.$invalid;
  }

  /** Load form data from an object */
  load(input: IDeviceTypeMappingRouterConfiguration): void {
    this.defaultDestination = input.defaultDestination || null;
  }

  /** Save form data to an object */
  save(): IDeviceTypeMappingRouterConfiguration {
    return {
      mappings: [],
      defaultDestination: this.defaultDestination || ""
    };
  }
}
</script>

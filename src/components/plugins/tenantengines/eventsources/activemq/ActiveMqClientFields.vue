<template>
  <sw-dialog-form>
    <v-flex xs12>
      <sw-form-text
        required
        label="Remote URI"
        title="Remote URI."
        v-model="remoteUri"
        icon="router"
      >
        <span v-if="!$v.remoteUri.required && $v.$dirty">Remote URI is required.</span>
      </sw-form-text>
    </v-flex>
    <v-flex xs6>
      <sw-form-text
        required
        label="Queue name"
        title="Queue name."
        v-model="queueName"
        icon="info"
        class="mr-3"
      >
        <span v-if="!$v.queueName.required && $v.$dirty">Queue name is required.</span>
      </sw-form-text>
    </v-flex>
    <v-flex xs6>
      <sw-form-text
        required
        label="Number of consumers"
        title="Number of consumers."
        v-model="numConsumers"
        icon="settings"
        type="number"
      >
        <span v-if="!$v.numConsumers.required && $v.$dirty">Number of consumers is required.</span>
      </sw-form-text>
    </v-flex>
  </sw-dialog-form>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import { DialogSection } from "sitewhere-ide-components";
import { IActiveMqClientConfiguration } from "sitewhere-configuration-model";

import { required } from "vuelidate/lib/validators";

@Component({
  validations: {
    remoteUri: {
      required
    },
    queueName: {
      required
    },
    numConsumers: {
      required
    }
  }
})
export default class ActiveMqClientFields extends DialogSection {
  remoteUri: string = "";
  queueName: string = "sitewhere";
  numConsumers: number = 3;

  /** Reset section content */
  reset(): void {
    this.remoteUri = "";
    this.queueName = "sitewhere";
    this.numConsumers = 3;
    this.$v.$reset();
  }

  /** Perform validation */
  validate(): boolean {
    this.$v.$touch();
    return !this.$v.$invalid;
  }

  /** Load form data from an object */
  load(input: IActiveMqClientConfiguration): void {
    this.remoteUri = input.remoteUri || "";
    this.queueName = input.queueName || "sitewhere";
    this.numConsumers = input.numConsumers || 3;
  }

  /** Save form data to an object */
  save(): {} {
    return {
      remoteUri: this.remoteUri,
      queueName: this.queueName,
      numConsumers: this.numConsumers
    };
  }
}
</script>

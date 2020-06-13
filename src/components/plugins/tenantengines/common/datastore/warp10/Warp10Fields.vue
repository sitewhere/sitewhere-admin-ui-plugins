<template>
  <dialog-form>
    <v-flex xs9>
      <form-text
        required
        :readonly="readonly"
        label="Hostname"
        title="Hostname of PostgreSQL server."
        v-model="hostname"
        icon="fa-server"
        class="mr-3"
      >
        <span v-if="$v.hostname.$invalid && $v.$dirty">Hostname is required.</span>
      </form-text>
    </v-flex>
    <v-flex xs3>
      <form-text
        required
        :readonly="readonly"
        label="Port"
        title="Port for PostgreSQL server."
        type="number"
        v-model="port"
      >
        <span v-if="$v.port.$invalid && $v.$dirty">Port is required.</span>
      </form-text>
    </v-flex>
    <v-flex xs12>
      <form-text
        required
        :readonly="readonly"
        label="Application"
        title="Warp 10 application name."
        v-model="application"
        icon="fa-stream"
      >
        <span v-if="$v.application.$invalid && $v.$dirty">Application is required.</span>
      </form-text>
    </v-flex>
    <v-flex xs12>
      <form-text
        required
        :readonly="readonly"
        label="Token secret"
        title="Warp 10 token secret."
        v-model="tokenSecret"
        icon="fa-stream"
      >
        <span v-if="$v.tokenSecret.$invalid && $v.$dirty">Token secret is required.</span>
      </form-text>
    </v-flex>
  </dialog-form>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import { DialogSection, DialogForm, FormText } from "sitewhere-ide-components";

import { VFlex } from "vuetify/lib";

import { required } from "vuelidate/lib/validators";
import { Validation } from "vuelidate";

@Component({
  components: { DialogForm, FormText, VFlex },
  validations: {
    hostname: {
      required
    }
  }
})
export default class Warp10Fields extends DialogSection {
  dummy!: Validation;
  @Prop() readonly readonly!: boolean;

  hostname: string | null = null;
  port: number | null = null;
  application: string | null = null;
  tokenSecret: string | null = null;

  /** Reset section content */
  reset(): void {
    this.hostname = null;
    this.port = null;
    this.application = null;
    this.tokenSecret = null;
    this.$v.$reset();
  }

  /** Perform validation */
  validate(): boolean {
    this.$v.$touch();
    return !this.$v.$invalid;
  }

  /** Load form data from an object */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  load(configuration: any): void {
    this.hostname = configuration.hostname;
    this.port = configuration.port;
  }

  /** Save form data to an object */
  save(): {} {
    return {
      hostname: this.hostname,
      port: this.port,
      application: this.application,
      tokenSecret: this.tokenSecret
    };
  }
}
</script>

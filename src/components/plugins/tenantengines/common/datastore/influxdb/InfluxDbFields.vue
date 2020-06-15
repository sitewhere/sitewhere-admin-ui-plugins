<template>
  <dialog-form>
    <v-flex xs9>
      <form-text
        required
        :readonly="readonly"
        label="Hostname"
        title="Hostname of InfluxDB server."
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
        title="Port for InfluxDB server."
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
        label="Database name"
        title="InfluxDB database name."
        v-model="databaseName"
        icon="fa-stream"
      >
        <span v-if="$v.databaseName.$invalid && $v.$dirty">Database name is required.</span>
      </form-text>
    </v-flex>
  </dialog-form>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import { DialogSection, DialogForm, FormText } from "sitewhere-ide-components";

import { VFlex } from "vuetify/lib";

import { required } from "vuelidate/lib/validators";
import { IInfluxDBConfiguration } from "sitewhere-configuration-model";

@Component({
  components: { DialogForm, FormText, VFlex },
  validations: {
    hostname: {
      required
    },
    port: {
      required
    },
    databaseName: {
      required
    }
  }
})
export default class InfluxDbFields extends DialogSection {
  @Prop() readonly readonly!: boolean;

  hostname: string | null = null;
  port: number | null = null;
  databaseName: string | null = null;

  /** Reset section content */
  reset(): void {
    this.hostname = null;
    this.port = null;
    this.databaseName = null;
    this.$v.$reset();
  }

  /** Perform validation */
  validate(): boolean {
    this.$v.$touch();
    return !this.$v.$invalid;
  }

  /** Load form data from an object */
  load(configuration: IInfluxDBConfiguration): void {
    this.hostname = configuration.hostname;
    this.port = configuration.port;
    this.databaseName = configuration.databaseName;
  }

  /** Save form data to an object */
  save(): {} {
    return {
      hostname: this.hostname,
      port: this.port,
      databaseName: this.databaseName
    };
  }
}
</script>

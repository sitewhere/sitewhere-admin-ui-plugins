<template>
  <dialog-form>
    <v-flex xs2>
      <form-select
        :items="protocols"
        title="Choose connection protocol"
        label="Protocol"
        item-text="text"
        item-value="value"
        v-model="protocol"
        icon="lock"
      />
    </v-flex>
    <v-flex xs8>
      <form-text
        required
        label="Hostname"
        title="MQTT broker hostname."
        v-model="hostname"
        icon="router"
        class="ml-3 mr-3"
      >
        <span v-if="!$v.hostname.required && $v.$dirty">Hostname is required.</span>
      </form-text>
    </v-flex>
    <v-flex xs2>
      <form-text required label="Port" title="MQTT broker port." v-model="port" type="number">
        <span v-if="!$v.port.required && $v.$dirty">Required.</span>
      </form-text>
    </v-flex>
    <v-flex xs12>
      <form-text
        required
        label="Topic"
        title="MQTT topic where events will be forwarded."
        v-model="outboundTopic"
        icon="arrow_forward"
        class="mb-4"
      >
        <span v-if="!$v.outboundTopic.required && $v.$dirty">Outbound topic is required.</span>
      </form-text>
    </v-flex>
  </dialog-form>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";

import {
  DialogSection,
  DialogForm,
  FormText,
  FormSelect
} from "sitewhere-ide-components";
import { VFlex } from "vuetify/lib";

import { IMqttOutboundConnectorConfiguration } from "sitewhere-configuration-model";
import { required } from "vuelidate/lib/validators";

@Component({
  components: { DialogForm, FormText, FormSelect, VFlex },
  validations: {
    protocol: {
      required
    },
    hostname: {
      required
    },
    port: {
      required
    },
    outboundTopic: {
      required
    }
  }
})
export default class MqttConnectionFields extends DialogSection {
  protocol = "tcp";
  hostname: string | null = null;
  port = 1883;
  outboundTopic: string | null = null;

  protocols: { text: string; value: string }[] = [
    {
      text: "TCP",
      value: "tcp"
    },
    {
      text: "TLS",
      value: "tls"
    }
  ];

  /** Reset section content */
  reset(): void {
    this.protocol = "tcp";
    this.hostname = null;
    this.port = 1883;
    this.outboundTopic = null;
    this.$v.$reset();
  }

  /** Perform validation */
  validate(): boolean {
    this.$v.$touch();
    return !this.$v.$invalid;
  }

  /** Load form data from an object */
  load(input: IMqttOutboundConnectorConfiguration): void {
    this.protocol = input.protocol || "tcp";
    this.hostname = input.hostname;
    this.port = input.port || 1883;
    this.outboundTopic = input.outboundTopic;
  }

  /** Save form data to an object */
  save(): {} {
    return {
      protocol: this.protocol,
      hostname: this.hostname || "",
      port: this.port,
      outboundTopic: this.outboundTopic || "",
    };
  }
}
</script>

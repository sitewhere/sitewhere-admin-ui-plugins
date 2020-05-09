<template>
  <sw-dialog-form>
    <v-flex xs2>
      <sw-form-select
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
      <sw-form-text
        required
        label="Hostname"
        title="MQTT broker hostname."
        v-model="hostname"
        icon="router"
        class="ml-3 mr-3"
      >
        <span v-if="!$v.hostname.required && $v.$dirty">Hostname is required.</span>
      </sw-form-text>
    </v-flex>
    <v-flex xs2>
      <sw-form-text required label="Port" title="MQTT broker port." v-model="port" type="number">
        <span v-if="!$v.port.required && $v.$dirty">Required.</span>
      </sw-form-text>
    </v-flex>
    <v-flex xs12>
      <sw-form-text
        required
        label="Topic"
        title="MQTT topic to listen on."
        v-model="topic"
        icon="arrow_forward"
        class="mb-4"
      >
        <span v-if="!$v.topic.required && $v.$dirty">Topic is required.</span>
      </sw-form-text>
    </v-flex>
    <v-flex xs6>
      <sw-form-select
        :items="qosValues"
        title="Choose quality of service (QoS)"
        label="QoS"
        item-text="text"
        item-value="value"
        v-model="qos"
        icon="done"
        class="mr-3"
      />
    </v-flex>
    <v-flex xs6>
      <sw-form-text
        required
        label="Number of threads"
        title="Number of threads used to handle processing."
        v-model="numThreads"
        icon="settings"
        type="number"
      >
        <span v-if="!$v.numThreads.required && $v.$dirty">Number of threads is required.</span>
      </sw-form-text>
    </v-flex>
  </sw-dialog-form>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import { DialogSection } from "sitewhere-ide-components";
import { IMqttEventSourceConfiguration } from "sitewhere-configuration-model";

import { required } from "vuelidate/lib/validators";

@Component({
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
    topic: {
      required
    },
    qos: {
      required
    },
    numThreads: {
      required
    }
  }
})
export default class MqttConnectionFields extends DialogSection {
  protocol = "tcp";
  hostname: string | null = null;
  port = 1883;
  topic: string | null = null;
  qos = 1;
  numThreads = 3;

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

  qosValues: { text: string; value: number }[] = [
    {
      text: "0 - At Most Once",
      value: 0
    },
    {
      text: "1 - At Least Once",
      value: 1
    },
    {
      text: "2 - Exactly Once",
      value: 3
    }
  ];

  /** Reset section content */
  reset(): void {
    this.protocol = "tcp";
    this.hostname = null;
    this.port = 1883;
    this.topic = null;
    this.qos = 0;
    this.numThreads = 3;
    this.$v.$reset();
  }

  /** Perform validation */
  validate(): boolean {
    this.$v.$touch();
    return !this.$v.$invalid;
  }

  /** Load form data from an object */
  load(input: IMqttEventSourceConfiguration): void {
    this.protocol = input.protocol || "tcp";
    this.hostname = input.hostname;
    this.port = input.port || 1883;
    this.topic = input.topic;
    this.qos = input.qos || 0;
    this.numThreads = input.numThreads || 3;
  }

  /** Save form data to an object */
  save(): {} {
    return {
      protocol: this.protocol,
      hostname: this.hostname || "",
      port: this.port,
      topic: this.topic || "",
      qos: this.qos,
      numThreads: this.numThreads
    };
  }
}
</script>

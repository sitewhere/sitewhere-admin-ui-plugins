<template>
  <dialog-form>
    <v-flex xs12>
      <form-text
        label="Hostname metadata field"
        title="Metadata field that provides CoAP server hostname."
        v-model="hostnameMetadataField"
        icon="settings"
        class="mr-3"
      >
        <span
          v-if="!$v.hostnameMetadataField.required && $v.$dirty"
        >Hostname metadata field is required.</span>
      </form-text>
    </v-flex>
    <v-flex xs12>
      <form-text
        label="Port metadata field"
        title="Metadata field that provides CoAP server port."
        v-model="portMetadataField"
        icon="settings"
        class="mr-3"
      >
        <span v-if="!$v.portMetadataField.required && $v.$dirty">Port metadata field is required.</span>
      </form-text>
    </v-flex>
    <v-flex xs12>
      <form-text
        label="URL metadata field"
        title="Metadata field that provides CoAP server URL."
        v-model="urlMetadataField"
        icon="settings"
        class="mr-3"
      >
        <span v-if="!$v.urlMetadataField.required && $v.$dirty">URL metadata field is required.</span>
      </form-text>
    </v-flex>
    <v-flex xs12>
      <form-text
        label="Method metadata field"
        title="Metadata field that provides CoAP server method."
        v-model="methodMetadataField"
        icon="settings"
        class="mr-3"
      >
        <span
          v-if="!$v.methodMetadataField.required && $v.$dirty"
        >Method metadata field is required.</span>
      </form-text>
    </v-flex>
  </dialog-form>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";

import { DialogSection, DialogForm, FormText } from "sitewhere-ide-components";
import { VFlex } from "vuetify/lib";

import { IMetadataCoapParameterExtractorConfiguration } from "sitewhere-configuration-model";

import { required } from "vuelidate/lib/validators";

@Component({
  components: { VFlex, DialogSection, DialogForm, FormText },
  validations: {
    hostnameMetadataField: {
      required
    },
    portMetadataField: {
      required
    },
    urlMetadataField: {
      required
    },
    methodMetadataField: {
      required
    }
  }
})
export default class MetadataCoapParameterExtractorFields extends DialogSection {
  @Prop() readonly tenantId!: string;

  hostnameMetadataField: string | null = null;
  portMetadataField: string | null = null;
  urlMetadataField: string | null = null;
  methodMetadataField: string | null = null;

  /** Reset section content */
  reset(): void {
    this.hostnameMetadataField = null;
    this.portMetadataField = null;
    this.urlMetadataField = null;
    this.methodMetadataField = null;
    this.$v.$reset();
  }

  /** Perform validation */
  validate(): boolean {
    this.$v.$touch();
    return !this.$v.$invalid;
  }

  /** Load form data from an object */
  load(input: IMetadataCoapParameterExtractorConfiguration): void {
    this.hostnameMetadataField = input.hostnameMetadataField || "coap_hostname";
    this.portMetadataField = input.portMetadataField || "coap_port";
    this.urlMetadataField = input.urlMetadataField || "coap_url";
    this.methodMetadataField = input.methodMetadataField || "coap_method";
  }

  /** Save form data to an object */
  save(): IMetadataCoapParameterExtractorConfiguration {
    return {
      hostnameMetadataField: this.hostnameMetadataField || "",
      portMetadataField: this.portMetadataField || "",
      urlMetadataField: this.urlMetadataField || "",
      methodMetadataField: this.methodMetadataField || ""
    };
  }
}
</script>
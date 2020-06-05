<template>
  <base-dialog
    ref="dialog"
    :icon="icon"
    :title="title"
    :width="width"
    :loaded="true"
    :visible="visible"
    :createLabel="createLabel || 'Create'"
    :cancelLabel="cancelLabel || 'Cancel'"
    @createClicked="onCreateClicked"
    @cancelClicked="onCancelClicked"
  >
    <template slot="header">
      <dialog-header>
        <v-layout class="pl-4 pr-4 pt-0 pb-0" row wrap>
          <v-flex xs5>
            <form-text
              v-if="visible"
              label="Event source id"
              title="Unique event source identifier."
              v-model="id"
              icon="info"
              :dense="true"
              :autofocus="true"
              class="mr-3"
            >
              <span v-if="!$v.id.required && $v.$dirty">Id is required.</span>
              <span v-if="!$v.id.idConflict && $v.$dirty">Id already in use.</span>
            </form-text>
          </v-flex>
          <v-flex xs7>
            <form-select
              :items="decoderTypes"
              title="Choose decoder for event source"
              label="Decoder"
              item-text="text"
              item-value="value"
              v-model="decoderType"
              icon="settings"
            />
          </v-flex>
        </v-layout>
      </dialog-header>
    </template>
    <template slot="tabs">
      <slot name="event-source-tabs" />
      <v-tab key="decoder">Decoder</v-tab>
    </template>
    <template slot="tab-items">
      <slot name="event-source-tab-items" />
      <v-tab-item key="decoder" eager>
        <decoder-configuration ref="decoderConfiguration" :decoder="decoder" :tenantId="tenantId" />
      </v-tab-item>
    </template>
  </base-dialog>
</template>

<script lang="ts">
import { Component, Prop, Ref } from "vue-property-decorator";

import {
  DialogComponent,
  BaseDialog,
  DialogHeader,
  FormText,
  FormSelect
} from "sitewhere-ide-components";
import { VFlex, VTab, VTabItem, VLayout } from "vuetify/lib";
import DecoderConfiguration from "./decoders/DecoderConfiguration.vue";

import {
  IEventSourceGenericConfiguration,
  IEventDecoderGenericConfiguration
} from "sitewhere-configuration-model";

import { required, ValidationRule, helpers } from "vuelidate/lib/validators";

/** Validator for checking if id is already used */
const idConflict: ValidationRule = helpers.withParams(
  { type: "idConflict" },
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  (value: any, vm: any) => {
    const idsInUse: string[] = vm.idsInUse;
    let conflict = false;
    idsInUse.forEach(id => {
      if (vm.id == id) conflict = true;
    });
    return !conflict;
  }
);

@Component({
  components: {
    BaseDialog,
    DialogHeader,
    FormText,
    FormSelect,
    VFlex,
    VTab,
    VTabItem,
    VLayout,
    DecoderConfiguration
  },
  validations: {
    id: {
      required,
      idConflict
    }
  }
})
export default class EventSourceDialog extends DialogComponent<
  IEventSourceGenericConfiguration
> {
  @Prop() readonly tenantId!: string;
  @Prop() readonly type!: string;
  @Prop() readonly icon!: string;
  @Prop() readonly title!: string;
  @Prop() readonly width!: number;
  @Prop() readonly cancelLabel!: string;
  @Prop() readonly createLabel!: string;
  @Prop() readonly visible!: boolean;
  @Prop() readonly idsInUse!: string[];
  @Ref() readonly dialog!: BaseDialog;
  @Ref() readonly decoderConfiguration!: DecoderConfiguration;

  defaultDecoder = {
    type: "json",
    configuration: {}
  };

  id: string | null = null;
  decoder: IEventDecoderGenericConfiguration = this.defaultDecoder;

  /** Decoder type */
  get decoderType(): string | null {
    return this.decoder ? this.decoder.type : null;
  }

  /** Blank configuration if type updated */
  set decoderType(value: string | null) {
    if (value) {
      this.decoder = {
        type: value,
        configuration: {}
      };
    }
  }

  /** List of decoder types */
  decoderTypes: { text: string; value: string }[] = [
    {
      text: "JSON",
      value: "json"
    },
    {
      text: "Google Protocol Buffers",
      value: "protobuf"
    },
    {
      text: "Scripted Event Decoder",
      value: "scripted"
    }
  ];

  /** Save dialog fields */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  save(): any {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const config: any = { id: this.id, type: this.type };
    this.decoder.configuration = this.decoderConfiguration.save();
    const decoder: { decoder: IEventDecoderGenericConfiguration } = {
      decoder: this.decoder
    };
    Object.assign(config, decoder);
    return config;
  }

  /** Reset the dialog */
  reset(): void {
    this.id = null;
    this.decoder = this.defaultDecoder;
    this.setActiveTab(0);
    if (this.decoderConfiguration) {
      this.decoderConfiguration.reset();
    }
    this.$v.$reset();
  }

  /** Validate fields */
  validate(): boolean {
    if (this.decoderConfiguration && !this.decoderConfiguration.validate()) {
      return false;
    }
    this.$v.$touch();
    return !this.$v.$invalid;
  }

  /** Load dialog from a given configuration */
  load(config: IEventSourceGenericConfiguration) {
    this.id = config.id;
    this.decoder = config.decoder;
  }

  /** Set the active tab */
  setActiveTab(tab: number): void {
    this.dialog.setActiveTab(tab);
  }

  /** Called after create button is clicked */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  onCreateClicked(e: any) {
    this.$emit("createClicked", e);
  }

  /** Called after cancel button is clicked */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  onCancelClicked(e: any) {
    this.$emit("cancelClicked", e);
  }
}
</script>

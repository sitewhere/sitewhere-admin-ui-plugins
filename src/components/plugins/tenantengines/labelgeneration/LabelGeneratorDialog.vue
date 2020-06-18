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
          <v-flex xs12>
            <form-text
              v-if="visible"
              label="Label generator id"
              title="Unique label generator identifier."
              v-model="id"
              icon="info"
              :dense="true"
              :autofocus="true"
            >
              <span v-if="!$v.id.required && $v.$dirty">Id is required.</span>
              <span v-if="!$v.id.idConflict && $v.$dirty">Id already in use.</span>
            </form-text>
          </v-flex>
        </v-layout>
      </dialog-header>
    </template>
    <template slot="tabs">
      <slot name="label-generator-tabs" />
    </template>
    <template slot="tab-items">
      <slot name="label-generator-tab-items" />
    </template>
  </base-dialog>
</template>

<script lang="ts">
import { Component, Prop, Ref } from "vue-property-decorator";

import {
  DialogComponent,
  BaseDialog,
  DialogHeader,
  FormText
} from "sitewhere-ide-components";
import { VFlex, VTab, VTabItem, VLayout } from "vuetify/lib";

import { ILabelGeneratorGenericConfiguration } from "sitewhere-configuration-model";

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
    VFlex,
    VTab,
    VTabItem,
    VLayout
  },
  validations: {
    id: {
      required,
      idConflict
    }
  }
})
export default class LabelGeneratorDialog extends DialogComponent<
  ILabelGeneratorGenericConfiguration
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

  id: string | null = null;

  /** Save dialog fields */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  save(): any {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const config: any = { id: this.id, type: this.type };
    return config;
  }

  /** Reset the dialog */
  reset(): void {
    this.id = null;
    this.setActiveTab(0);
    this.$v.$reset();
  }

  /** Validate fields */
  validate(): boolean {
    this.$v.$touch();
    return !this.$v.$invalid;
  }

  /** Load dialog from a given configuration */
  load(config: ILabelGeneratorGenericConfiguration) {
    this.id = config.id;
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

<template>
  <sw-dialog-form>
    <v-flex xs8>
      <sw-script-chooser
        ref="chooser"
        label="Event Decoder Script"
        title="Script used to decode event payloads."
        :tenantId="tenantId"
        functionalArea="event-sources"
        category="event-sources-event-decoder-category"
        v-model="scriptId"
        icon="fa-code"
        class="mr-3"
      >
        <span v-if="!$v.scriptId.required && $v.$dirty">Event decoder script is required.</span>
      </sw-script-chooser>
    </v-flex>
  </sw-dialog-form>
</template>

<script lang="ts">
import { Component, Prop, Ref } from "vue-property-decorator";
import { DialogSection, ScriptChooser } from "sitewhere-ide-components";
import { IScriptedEventDecoderConfiguration } from "sitewhere-configuration-model";

import { required } from "vuelidate/lib/validators";

@Component({
  validations: {
    scriptId: {
      required
    }
  }
})
export default class ScriptedDecoderFields extends DialogSection {
  @Prop() readonly tenantId!: string;
  @Ref() readonly chooser!: ScriptChooser;

  scriptId: string | null = null;

  /** Reset section content */
  reset(): void {
    if (this.chooser) {
      this.chooser.reset();
    }
    this.scriptId = null;
    this.$v.$reset();
  }

  /** Perform validation */
  validate(): boolean {
    this.$v.$touch();
    return !this.$v.$invalid;
  }

  /** Load form data from an object */
  load(input: IScriptedEventDecoderConfiguration): void {
    this.scriptId = input.scriptId || null;
  }

  /** Save form data to an object */
  save(): IScriptedEventDecoderConfiguration {
    return {
      scriptId: this.scriptId || ""
    };
  }
}
</script>

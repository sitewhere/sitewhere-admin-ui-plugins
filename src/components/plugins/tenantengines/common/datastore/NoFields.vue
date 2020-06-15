<template>
  <v-card flat style="width: 100%;">
    <v-card-text class="padded-message subheading">This database type is not currently supported.</v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import { DialogSection } from "sitewhere-ide-components";

import { VCard, VCardText } from "vuetify/lib";

@Component({
  components: { VCard, VCardText },
  validations: {}
})
export default class NoFields extends DialogSection {
  @Prop() readonly readonly!: boolean;

  /** Reset section content */
  reset(): void {
    this.$v.$reset();
  }

  /** Perform validation */
  validate(): boolean {
    this.$v.$touch();
    return !this.$v.$invalid;
  }

  /** Load form data from an object */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
  load(configuration: any): void {}

  /** Save form data to an object */
  save(): {} {
    return {};
  }
}
</script>

<style scoped>
.padded-message {
  padding: 50px;
  padding-top: 35px;
  text-align: center;
}
</style>

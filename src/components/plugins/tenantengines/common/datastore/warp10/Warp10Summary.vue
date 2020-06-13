<template>
  <v-card flat>
    <content-field name="type" value="Warp 10" />
    <content-field :alt="true" name="hostname" value="hostname" />
    <content-field name="port" :value="port" />
    <content-field :alt="true" name="application" value="application" />
    <content-field name="tokenSecret" :value="tokenSecret" />
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { IWarp10Configuration } from "sitewhere-configuration-model";

import { ContentField } from "sitewhere-ide-components";
import { VCard } from "vuetify/lib";

@Component({
  components: { VCard, ContentField }
})
export default class Warp10Summary extends Vue {
  @Prop() readonly configuration!: IWarp10Configuration;

  /** Hostname */
  get hostname(): string | null {
    return this.configuration ? this.configuration.hostname : null;
  }

  /** Port */
  get port(): number | null {
    return this.configuration ? this.configuration.port : null;
  }

  /** Application */
  get application(): string | null {
    return this.configuration ? this.configuration.application : null;
  }

  /** Token secret */
  get tokenSecret(): string | null {
    return this.configuration ? this.configuration.tokenSecret : null;
  }
}
</script>

<template>
  <v-card flat>
    <content-field name="type" value="InfluxDB" />
    <content-field :alt="true" name="hostname" :value="hostname" />
    <content-field name="port" :value="port" />
    <content-field :alt="true" name="database name" :value="databaseName" />
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { IInfluxDBConfiguration } from "sitewhere-configuration-model";

import { ContentField } from "sitewhere-ide-components";
import { VCard } from "vuetify/lib";

@Component({
  components: { VCard, ContentField }
})
export default class InfluxDbSummary extends Vue {
  @Prop() readonly configuration!: IInfluxDBConfiguration;

  /** Hostname */
  get hostname(): string | null {
    return this.configuration ? this.configuration.hostname : null;
  }

  /** Port */
  get port(): number | null {
    return this.configuration ? this.configuration.port : null;
  }

  /** Application */
  get databaseName(): string | null {
    return this.configuration ? this.configuration.databaseName : null;
  }
}
</script>

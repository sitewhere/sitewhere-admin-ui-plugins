<template>
  <v-card flat>
    <content-field name="unknown" value="Database type is unknown" />
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import { ContentField } from "sitewhere-ide-components";
import { VCard } from "vuetify/lib";

@Component({ components: { VCard, ContentField } })
export default class NoSummary extends Vue {}
</script>

<template>
  <v-card flat>
    <json-decoder-configuration ref="details" v-if="decoderType == 'json'" />
    <protobuf-decoder-configuration ref="details" v-if="decoderType == 'protobuf'" />
    <scripted-event-decoder-configuration
      ref="details"
      :tenantId="tenantId"
      v-if="decoderType == 'scripted'"
    />
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Ref, Watch } from "vue-property-decorator";

import { DialogSection } from "sitewhere-ide-components";
import { VCard } from "vuetify/lib";

import JsonDecoderConfiguration from "./json/JsonDecoderConfiguration.vue";
import ProtobufDecoderConfiguration from "./protobuf/ProtobufDecoderConfiguration.vue";
import ScriptedEventDecoderConfiguration from "./scripted/ScriptedEventDecoderConfiguration.vue";
import { IEventDecoderGenericConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    VCard,
    JsonDecoderConfiguration,
    ProtobufDecoderConfiguration,
    ScriptedEventDecoderConfiguration
  }
})
export default class DecoderConfiguration extends DialogSection {
  @Prop() readonly tenantId!: string;
  @Prop() readonly decoder!: IEventDecoderGenericConfiguration;
  @Ref() readonly details!: DialogSection;

  @Watch("decoderType", { immediate: true })
  onDecoderTypeUpdated() {
    this.load(this.decoder);
  }

  /** Decoder type */
  get decoderType(): string | null {
    return this.decoder ? this.decoder.type : null;
  }

  /** Reset section content */
  reset(): void {
    if (this.details) {
      this.details.reset();
    }
  }

  /** Perform validation */
  validate(): boolean {
    if (this.details && !this.details.validate()) {
      return false;
    }
    return true;
  }

  /** Load form data from an object */
  load(input: IEventDecoderGenericConfiguration): void {
    this.$nextTick().then(() => {
      if (this.details) {
        this.details.load(input.configuration);
      }
    });
  }

  /** Save form data to an object */
  save(): {} {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const config: any = {};
    if (this.details) {
      Object.assign(config, this.details.save());
    }
    return config;
  }
}
</script>

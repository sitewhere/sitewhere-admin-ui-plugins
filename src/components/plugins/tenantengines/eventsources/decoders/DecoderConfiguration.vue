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

import JsonDecoderConfiguration from "./json/JsonDecoderConfiguration.vue";
import ProtobufDecoderConfiguration from "./protobuf/ProtobufDecoderConfiguration.vue";
import ScriptedEventDecoderConfiguration from "./scripted/ScriptedEventDecoderConfiguration.vue";
import { IEventDecoderGenericConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
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
  onDecoderTypeUpdated(updated: string) {
    this.load(this.decoder);
  }

  /** Decoder type */
  get decoderType(): string | null {
    return this.decoder ? this.decoder.type : null;
  }

  /** Reset section content */
  reset(): void {
    if (this.details) {
      (this.details as any).reset();
    }
  }

  /** Perform validation */
  validate(): boolean {
    if (this.details) {
      if (!(this.details as any).validate()) {
        return false;
      }
    }
    return true;
  }

  /** Load form data from an object */
  load(input: IEventDecoderGenericConfiguration): void {
    this.$nextTick().then(() => {
      if (this.details) {
        (this.details as any).load(input.configuration);
      }
    });
  }

  /** Save form data to an object */
  save(): {} {
    let config: any = {};
    if (this.details) {
      Object.assign(config, (this.details as any).save());
    }
    return config;
  }
}
</script>

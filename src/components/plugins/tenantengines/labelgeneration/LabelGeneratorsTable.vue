<template>
  <content-section :icon="icon" title="Label Generators">
    <section-overview title="Configured Label Generators">
      Label generators are used to generate images, bar codes,
      or other artifacts which are based on device information.
    </section-overview>
    <datatable-section
      :headers="headers"
      :items="displayLabelGenerators"
      no-data-text="No label generators have been defined"
      width="50%"
    >
      <template v-slot:item="props">
        <tr>
          <td width="48%">
            <datatable-link
              @linkClicked="onOpenLabelGenerator(props.item.meta.id)"
              :text="props.item.meta.id"
            />
          </td>
          <td width="48%">{{ props.item.meta.type }}</td>
          <td width="4%">
            <content-delete-icon @delete="onDeleteLabelGenerator(props.item.meta.id)" />
          </td>
        </tr>
      </template>
      <template v-slot:datatable-footer>
        <content-link
          class="mt-5"
          icon="fa-plus-circle"
          text="Add new label generator."
          @linkClicked="onAddLabelGenerator"
        />
      </template>
      <template v-slot:datatable-dialogs>
        <new-label-generator-chooser ref="chooser" @chosen="onLabelGeneratorCreate" />
        <qr-code-label-generator-create-dialog
          ref="qrcodeCreate"
          :tenantId="tenantId"
          @create="onLabelGeneratorAdded"
        />
        <qr-code-label-generator-update-dialog
          ref="qrcodeUpdate"
          :tenantId="tenantId"
          @update="onLabelGeneratorUpdated"
        />
      </template>
    </datatable-section>
  </content-section>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Ref } from "vue-property-decorator";
import { MicroserviceIcon } from "sitewhere-ide-common";

import NewLabelGeneratorChooser from "./NewLabelGeneratorChooser.vue";
import QrCodeLabelGeneratorCreateDialog from "./generators/qrcode/QrCodeLabelGeneratorCreateDialog.vue";
import QrCodeLabelGeneratorUpdateDialog from "./generators/qrcode/QrCodeLabelGeneratorUpdateDialog.vue";

import {
  ContentSection,
  ContentDeleteIcon,
  DatatableSection,
  DatatableLink,
  ContentLink,
  SectionOverview
} from "sitewhere-ide-components";

import { ILabelGeneratorGenericConfiguration } from "sitewhere-configuration-model";

/** Format for displaying data */
interface IDisplayedGenerator {
  meta: { id: string; type: string };
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  config: any;
}

@Component({
  components: {
    ContentSection,
    DatatableSection,
    DatatableLink,
    ContentDeleteIcon,
    ContentLink,
    SectionOverview,
    NewLabelGeneratorChooser,
    QrCodeLabelGeneratorCreateDialog,
    QrCodeLabelGeneratorUpdateDialog
  }
})
export default class LabelGeneratorTable extends Vue {
  @Prop() readonly tenantId!: string;
  @Prop() readonly generators!: ILabelGeneratorGenericConfiguration[];
  @Ref() readonly chooser!: NewLabelGeneratorChooser;
  @Ref() readonly qrcodeCreate!: QrCodeLabelGeneratorCreateDialog;
  @Ref() readonly qrcodeUpdate!: QrCodeLabelGeneratorUpdateDialog;

  headers: { text: string; value: string }[] = [
    { text: "Id", value: "id" },
    { text: "Type", value: "type" },
    { text: "", value: "delete" }
  ];

  /** Get page icon */
  get icon(): MicroserviceIcon {
    return MicroserviceIcon.LabelGeneration;
  }

  /** Get list of ids already in use */
  findIdsInUse(exclude?: string): string[] {
    const ids: string[] = [];
    if (this.generators) {
      this.generators.forEach(generator => {
        if (generator.id != exclude) {
          ids.push(generator.id);
        }
      });
    }
    return ids;
  }

  /** Get label generator index based on id */
  getLabelGeneratorIndex(id: string): number | null {
    let match: number | null = null;
    if (this.generators) {
      this.generators.forEach((dest, index) => {
        if (dest.id === id) {
          match = index;
        }
      });
    }
    return match;
  }

  /** Get a label generator by id */
  getLabelGeneratorById(
    id: string
  ): ILabelGeneratorGenericConfiguration | null {
    const index: number | null = this.getLabelGeneratorIndex(id);
    if (this.generators && index != null) {
      return this.generators[index];
    }
    return null;
  }

  /** Get label generators as a sorted array */
  get displayLabelGenerators(): IDisplayedGenerator[] {
    const all: IDisplayedGenerator[] = [];
    if (this.generators) {
      this.generators.forEach(generator => {
        const meta: { id: string; type: string } = {
          id: generator.id,
          type: generator.type
        };
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        const config: any = generator.configuration;
        all.push({ meta: meta, config: config });
      });
    }
    all.sort(function(a, b) {
      return a.meta.id.localeCompare(b.meta.id);
    });
    return all;
  }

  /** Add new label generator */
  onAddLabelGenerator() {
    this.chooser.openChooser();
  }

  /** Called to create a new label generator based on type */
  onLabelGeneratorCreate(id: string): void {
    const idsInUse: string[] = this.findIdsInUse();
    if (id == "qr-code") {
      this.qrcodeCreate.openDialog(idsInUse);
    }
  }

  /** Called when label generator is added */
  onLabelGeneratorAdded(config: ILabelGeneratorGenericConfiguration): void {
    if (this.generators) {
      this.generators.push(config);
    }
    this.$emit("create", config);
  }

  /** Open label generator by id */
  onOpenLabelGenerator(id: string) {
    const config: ILabelGeneratorGenericConfiguration | null = this.getLabelGeneratorById(
      id
    );
    const idsInUse: string[] = this.findIdsInUse(id);
    if (config) {
      if (config.type === "qr-code") {
        this.qrcodeUpdate.openDialog(config, idsInUse);
      }
    }
  }

  /** Called when label generator is updated */
  onLabelGeneratorUpdated(
    originalId: string,
    config: ILabelGeneratorGenericConfiguration
  ): void {
    const index: number | null = this.getLabelGeneratorIndex(originalId);
    if (this.generators && index != null) {
      Vue.set(this.generators, index, config);
    }
    this.$emit("update", originalId, config);
  }

  /** Delete label generator by id */
  onDeleteLabelGenerator(id: string) {
    const index: number | null = this.getLabelGeneratorIndex(id);
    if (this.generators && index != null) {
      this.generators.splice(index, 1);
    }
    this.$emit("delete", id);
  }
}
</script>

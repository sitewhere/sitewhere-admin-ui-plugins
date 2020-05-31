<template>
  <base-dialog
    ref="dialog"
    icon="fa-sitemap"
    :title="title"
    width="500"
    :loaded="true"
    :visible="dialogVisible"
    :createLabel="createLabel"
    cancelLabel="Cancel"
    @createClicked="onCreateClicked"
    @cancelClicked="onCancelClicked"
  >
    <template slot="tabs">
      <v-tab key="manager">Mappings</v-tab>
    </template>
    <template slot="tab-items">
      <v-tab-item key="manager">
        <device-type-mapping-router-fields :deviceTypes="deviceTypes" ref="mappings" />
      </v-tab-item>
    </template>
  </base-dialog>
</template>

<script lang="ts">
import { Component, Ref, Prop } from "vue-property-decorator";
import { showError, listDeviceTypes } from "sitewhere-ide-common";

import { DialogComponent, BaseDialog } from "sitewhere-ide-components";
import { VTab, VTabItem } from "vuetify/lib";

import { IDeviceTypeMappingRouterConfiguration } from "sitewhere-configuration-model";
import { AxiosResponse } from "axios";
import {
  IDeviceType,
  IDeviceTypeSearchCriteria,
  IDeviceTypeResponseFormat,
  IDeviceTypeSearchResults
} from "sitewhere-rest-api";

import DeviceTypeMappingRouterFields from "./DeviceTypeMappingRouterFields.vue";

@Component({
  components: {
    VTab,
    VTabItem,
    DialogComponent,
    BaseDialog,
    DeviceTypeMappingRouterFields
  }
})
export default class DeviceTypeMappingRouterDialog extends DialogComponent<
  IDeviceTypeMappingRouterConfiguration
> {
  @Prop() readonly title!: string;
  @Prop() readonly createLabel!: string;
  @Ref() readonly dialog!: BaseDialog;
  @Ref() readonly mappings!: DeviceTypeMappingRouterFields;

  deviceTypes: IDeviceType[] = [];

  /** Generate payload from UI */
  generatePayload() {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const payload: any = {};
    Object.assign(payload, this.mappings.save());

    return payload;
  }

  /** Reset dialog contents */
  reset() {
    this.loadDeviceTypes();
    if (this.mappings) {
      this.mappings.reset();
    }
  }

  /** Load device types asynchronously */
  async loadDeviceTypes() {
    try {
      const criteria: IDeviceTypeSearchCriteria = {
        pageNumber: 1,
        pageSize: 0
      };
      const format: IDeviceTypeResponseFormat = {};
      const response: AxiosResponse<IDeviceTypeSearchResults> = await listDeviceTypes(
        this.$store,
        criteria,
        format
      );
      this.deviceTypes = response.data.results;
    } catch (err) {
      showError(this, err);
    }
  }

  /** Load dialog from a given configuration */
  load(config: IDeviceTypeMappingRouterConfiguration) {
    this.reset();
    if (this.mappings) {
      this.mappings.load(config);
    }
  }

  /** Called after create button is clicked */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
  onCreateClicked(e: any) {
    if (!this.mappings.validate()) {
      this.dialog.setActiveTab(0);
      return;
    }

    const payload = this.generatePayload();
    this.$emit("payload", payload);
    this.closeDialog();
  }
}
</script>

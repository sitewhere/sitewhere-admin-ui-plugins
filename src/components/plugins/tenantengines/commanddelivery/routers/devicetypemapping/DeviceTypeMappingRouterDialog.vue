<template>
  <sw-base-dialog
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
  </sw-base-dialog>
</template>

<script lang="ts">
import {
  Component,
  DialogComponent,
  Refs,
  Prop,
  showError,
  MicroserviceIcon,
  listDeviceTypes
} from "sitewhere-ide-common";
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
  components: { DeviceTypeMappingRouterFields }
})
export default class DeviceTypeMappingRouterDialog extends DialogComponent<
  IDeviceTypeMappingRouterConfiguration
> {
  @Prop() readonly title!: string;
  @Prop() readonly createLabel!: string;

  $store: any;
  deviceTypes: IDeviceType[] = [];

  // References.
  $refs!: Refs<{
    dialog: any;
    mappings: DeviceTypeMappingRouterFields;
  }>;

  /** Generate payload from UI */
  generatePayload() {
    let payload: any = {};
    Object.assign(payload, (this.$refs.mappings as any).save());

    return payload;
  }

  /** Reset dialog contents */
  reset() {
    this.loadDeviceTypes();
    if (this.$refs.mappings) {
      (this.$refs.mappings as any).reset();
    }
  }

  /** Load device types asynchronously */
  async loadDeviceTypes() {
    try {
      let criteria: IDeviceTypeSearchCriteria = { pageNumber: 1, pageSize: 0 };
      let format: IDeviceTypeResponseFormat = {};
      let response: AxiosResponse<IDeviceTypeSearchResults> = await listDeviceTypes(
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
    if (this.$refs.mappings) {
      (this.$refs.mappings as any).load(config);
    }
  }

  /** Called after create button is clicked */
  onCreateClicked(e: any) {
    if (!(this.$refs.mappings as any).validate()) {
      this.$refs.dialog.setActiveTab(0);
      return;
    }

    var payload = this.generatePayload();
    this.$emit("payload", payload);
    this.closeDialog();
  }
}
</script>

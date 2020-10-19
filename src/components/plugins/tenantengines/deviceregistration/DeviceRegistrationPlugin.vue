<template>
  <tenant-engine-plugin :configuration="configuration">
    <content-section icon="fa-check" title="Device Registration">
      <section-overview title="Automatic Registration">
        New devices may be automatically registered with the
        system if they provide a valid token for the given tenant.
        If new device registration is permitted, the devices may
        be assigned to assets, customers, or areas.
      </section-overview>
      <v-checkbox class="pt-1" dense v-model="allowNewRegistrations">
        <template v-slot:label>
          <span class="body-2">Allow new device registration for this tenant</span>
        </template>
      </v-checkbox>
      <section-overview v-show="allowNewRegistrations" title="Defaults for New Devices">
        If registration requests for new devices do not provide metadata
        regarding aspects such as device type or preferred assignment
        information, the values may be automatically assigned. Choose
        default behavior below.
      </section-overview>
      <v-card flat v-show="allowNewRegistrations" width="60%">
        <optional-selection
          :items="deviceTypes"
          checkboxTitle="Use default device type if not provided"
          selectLabel="Choose device type"
          selectTitle="Choose a default device type for new devices"
          selectItemText="name"
          selectItemValue="token"
          v-model="deviceTypeToken"
          class="mb-3"
        />
        <optional-selection
          :items="customers"
          checkboxTitle="Use default customer if not provided"
          selectLabel="Choose customer"
          selectTitle="Choose a default customer for device assignment"
          selectItemText="name"
          selectItemValue="token"
          v-model="customerToken"
          class="mb-3"
        />
        <optional-selection
          :items="areas"
          checkboxTitle="Use default area if not provided"
          selectLabel="Choose area"
          selectTitle="Choose a default area for device assignment"
          selectItemText="name"
          selectItemValue="token"
          v-model="areaToken"
        />
        <optional-selection
          :items="assets"
          checkboxTitle="Use default asset if not provided"
          selectLabel="Choose asset"
          selectTitle="Choose a default asset for device assignment"
          selectItemText="name"
          selectItemValue="token"
          v-model="assetToken"
        />
        
      </v-card>
    </content-section>
  </tenant-engine-plugin>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

import TenantEnginePlugin from "../TenantEnginePlugin.vue";

import {
  ContentSection,
  SectionOverview,
  FormSelect,
  OptionalSelection
} from "sitewhere-ide-components";
import { VCheckbox, VCard } from "vuetify/lib";

import { ITenantEngineConfiguration } from "sitewhere-rest-api";
import { IDeviceRegistrationConfiguration } from "sitewhere-configuration-model";
import {
  IInstanceConfiguration,
  IDeviceType,
  IDeviceTypeSearchCriteria,
  IDeviceTypeResponseFormat,
  IDeviceTypeSearchResults,
  ICustomer,
  ICustomerSearchCriteria,
  ICustomerResponseFormat,
  ICustomerSearchResults,
  IArea,
  IAreaSearchCriteria,
  IAreaResponseFormat,
  IAreaSearchResults,
  IAsset,
  IAssetSearchCriteria,
  IAssetResponseFormat,
  IAssetSearchResults
} from "sitewhere-rest-api";
import { AxiosResponse } from "axios";
import {
  showError,
  listDeviceTypes,
  listCustomers,
  listAreas,
  listAssets
} from "sitewhere-ide-common";

@Component({
  components: {
    VCheckbox,
    VCard,
    ContentSection,
    TenantEnginePlugin,
    SectionOverview,
    FormSelect,
    OptionalSelection
  }
})
export default class DeviceRegsitrationPlugin extends Vue {
  @Prop() readonly configuration!: ITenantEngineConfiguration;

  allowNewRegistrations = false;

  deviceTypes: IDeviceType[] = [];
  deviceTypeToken: string | null = null;

  customers: ICustomer[] = [];
  customerToken: string | null = null;

  areas: IArea[] = [];
  areaToken: string | null = null;

  assets: IAsset[] = [];
  assetToken: string | null = null;

  /** Get tenant configuration for device registration */
  get deviceRegistration(): IDeviceRegistrationConfiguration {
    return this.configuration ? this.configuration.tenantConfiguration : null;
  }

  /** Get instance configuraton information */
  get instanceManagement(): IInstanceConfiguration | null {
    return this.configuration ? this.configuration.instanceConfiguration : null;
  }

  @Watch("deviceRegistration", { immediate: true })
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  onConfigurationUpdated(updated: IDeviceRegistrationConfiguration) {
    // Load data for dropdowns.
    this.loadDeviceTypes();
    this.loadCustomers();
    this.loadAreas();
    this.loadAssets();

    // Verify that config structure is valid.
    this.assureAssignmentDefaults();

    // Set local variables from configuration.
    this.allowNewRegistrations = this.deviceRegistration.allowNewDevices;
    this.deviceTypeToken = this.deviceRegistration.assignmentDefaults.defaultDeviceTypeToken;
    this.customerToken = this.deviceRegistration.assignmentDefaults.defaultCustomerToken;
    this.areaToken = this.deviceRegistration.assignmentDefaults.defaultAreaToken;
    this.assetToken = this.deviceRegistration.assignmentDefaults.defaultAssetToken;
  }

  @Watch("allowNewRegistrations")
  onAllowNewRegistrationsUpdate(updated: boolean) {
    this.deviceRegistration.allowNewDevices = updated;
    this.markDirty();
  }

  @Watch("deviceTypeToken")
  onDeviceTypeTokenUpdated(updated: string) {
    this.deviceRegistration.assignmentDefaults.defaultDeviceTypeToken = updated;
    this.markDirty();
  }

  @Watch("customerToken")
  onCustomerTokenUpdated(updated: string) {
    this.deviceRegistration.assignmentDefaults.defaultCustomerToken = updated;
    this.markDirty();
  }

  @Watch("areaToken")
  onAreaTokenUpdated(updated: string) {
    this.deviceRegistration.assignmentDefaults.defaultAreaToken = updated;
    this.markDirty();
  }

  @Watch("assetToken")
  onAssetTokenUpdated(updated: string) {
    this.deviceRegistration.assignmentDefaults.defaultAssetToken = updated;
    this.markDirty();
  }

  /** Assure assignment defaults section if null */
  assureAssignmentDefaults(): void {
    if (!this.deviceRegistration.assignmentDefaults) {
      this.deviceRegistration.assignmentDefaults = {
        defaultDeviceTypeToken: null,
        defaultCustomerToken: null,
        defaultAreaToken: null,
        defaultAssetToken: null
      };
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

  /** Load customers asynchronously */
  async loadCustomers() {
    try {
      const criteria: ICustomerSearchCriteria = {
        pageNumber: 1,
        pageSize: 0
      };
      const format: ICustomerResponseFormat = {};
      const response: AxiosResponse<ICustomerSearchResults> = await listCustomers(
        this.$store,
        criteria,
        format
      );
      this.customers = response.data.results;
    } catch (err) {
      showError(this, err);
    }
  }

  /** Load areas asynchronously */
  async loadAreas() {
    try {
      const criteria: IAreaSearchCriteria = {
        pageNumber: 1,
        pageSize: 0
      };
      const format: IAreaResponseFormat = {};
      const response: AxiosResponse<IAreaSearchResults> = await listAreas(
        this.$store,
        criteria,
        format
      );
      this.areas = response.data.results;
    } catch (err) {
      showError(this, err);
    }
  }

  /** Load assets asynchronously */
  async loadAssets() {
    try {
      const criteria: IAssetSearchCriteria = {
        pageNumber: 1,
        pageSize: 0
      };
      const format: IAssetResponseFormat = {};
      const response: AxiosResponse<IAssetSearchResults> = await listAssets(
        this.$store,
        criteria,
        format
      );
      this.assets = response.data.results;
    } catch (err) {
      showError(this, err);
    }
  }

  /** Mark data as having been updated */
  markDirty(): void {
    this.$emit("dirty");
  }
}
</script>

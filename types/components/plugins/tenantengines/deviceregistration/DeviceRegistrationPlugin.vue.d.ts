import Vue from "vue";
import { ITenantEngineConfiguration } from "sitewhere-rest-api";
import { IDeviceRegistrationConfiguration } from "sitewhere-configuration-model";
import { IInstanceConfiguration, IDeviceType, ICustomer, IArea } from "sitewhere-rest-api";
export default class DeviceManagementPlugin extends Vue {
    readonly configuration: ITenantEngineConfiguration;
    allowNewRegistrations: boolean;
    deviceTypes: IDeviceType[];
    deviceTypeToken: string | null;
    customers: ICustomer[];
    customerToken: string | null;
    areas: IArea[];
    areaToken: string | null;
    /** Get tenant configuration for device registration */
    get deviceRegistration(): IDeviceRegistrationConfiguration;
    /** Get instance configuraton information */
    get instanceManagement(): IInstanceConfiguration | null;
    onConfigurationUpdated(updated: IDeviceRegistrationConfiguration): void;
    onAllowNewRegistrationsUpdate(updated: boolean): void;
    onDeviceTypeTokenUpdated(updated: string): void;
    onCustomerTokenUpdated(updated: string): void;
    onAreaTokenUpdated(updated: string): void;
    /** Assure assignment defaults section if null */
    assureAssignmentDefaults(): void;
    /** Load device types asynchronously */
    loadDeviceTypes(): Promise<void>;
    /** Load customers asynchronously */
    loadCustomers(): Promise<void>;
    /** Load areas asynchronously */
    loadAreas(): Promise<void>;
    /** Mark data as having been updated */
    markDirty(): void;
}

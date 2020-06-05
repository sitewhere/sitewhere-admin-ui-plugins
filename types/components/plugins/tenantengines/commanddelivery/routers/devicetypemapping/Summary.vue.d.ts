import Vue from "vue";
import SettingsUpdateDialog from "./SettingsUpdateDialog.vue";
import MappingCreateDialog from "./MappingCreateDialog.vue";
import { ICommandDestinationGenericConfiguration, IRouterGenericConfiguration, IDeviceTypeMappingRouterConfiguration, IDeviceTypeMapping } from "sitewhere-configuration-model";
import { IDeviceType } from "sitewhere-rest-api";
/** Mapping for displaying data */
interface IDisplayedMapping {
    deviceTypeToken: string;
    deviceTypeName: string;
    destinationId: string;
}
export default class DeviceTypeMappingRouterSummary extends Vue {
    readonly destinations: ICommandDestinationGenericConfiguration[];
    readonly router: IRouterGenericConfiguration;
    readonly settings: SettingsUpdateDialog;
    readonly mapping: MappingCreateDialog;
    deviceTypes: IDeviceType[];
    /** Table headers */
    headers: {
        text: string;
        value: string;
    }[];
    /** Called when component is created */
    created(): void;
    /** Get device type mapping router configuration */
    get configuration(): IDeviceTypeMappingRouterConfiguration | null;
    /** Indicates if there are mappings */
    get hasMappings(): boolean;
    /** Current list of device type mappings */
    get mappings(): IDeviceTypeMapping[] | null;
    /** Get default destination */
    get defaultDestination(): string | null;
    /** Create sorted list of displayed mappings */
    get displayedMappings(): IDisplayedMapping[];
    /** Add a new device type mapping */
    onAddMapping(): void;
    /** Called after a new mapping is added */
    onMappingAdded(mapping: IDeviceTypeMapping): void;
    /** Get mapping index */
    getMappingIndex(deviceTypeToken: string, destinationId: string): number | null;
    /** Called to remove an existing mapping */
    onDeleteMapping(deviceTypeToken: string, destinationId: string): void;
    /** Update command router settings */
    onUpdateSettings(): void;
    /** Called after router settings have been updated. */
    onSettingsUpdated(updated: IDeviceTypeMappingRouterConfiguration): void;
    /** Load device types asynchronously */
    loadDeviceTypes(): Promise<void>;
    /** Get a device type by token */
    getDeviceTypeByToken(token: string): IDeviceType | null;
}
export {};

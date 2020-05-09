import Vue from "vue";
import { IRouterGenericConfiguration, IDeviceTypeMappingRouterConfiguration, IDeviceTypeMapping } from "sitewhere-configuration-model";
export default class DeviceTypeMappingRouterSummary extends Vue {
    readonly router: IRouterGenericConfiguration;
    /** Get device type mapping router configuration */
    get configuration(): IDeviceTypeMappingRouterConfiguration | null;
    /** Indicates if there are mappings */
    get hasMappings(): boolean;
    /** Current list of device type mappings */
    get mappings(): IDeviceTypeMapping[] | null;
    /** Get default destination */
    get defaultDestination(): string | null;
}

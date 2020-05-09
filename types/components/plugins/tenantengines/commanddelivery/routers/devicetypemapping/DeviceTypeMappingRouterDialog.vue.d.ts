import { DialogComponent, BaseDialog } from "sitewhere-ide-components";
import { IDeviceTypeMappingRouterConfiguration } from "sitewhere-configuration-model";
import { IDeviceType } from "sitewhere-rest-api";
import DeviceTypeMappingRouterFields from "./DeviceTypeMappingRouterFields.vue";
export default class DeviceTypeMappingRouterDialog extends DialogComponent<IDeviceTypeMappingRouterConfiguration> {
    readonly title: string;
    readonly createLabel: string;
    readonly dialog: BaseDialog;
    readonly mappings: DeviceTypeMappingRouterFields;
    deviceTypes: IDeviceType[];
    /** Generate payload from UI */
    generatePayload(): any;
    /** Reset dialog contents */
    reset(): void;
    /** Load device types asynchronously */
    loadDeviceTypes(): Promise<void>;
    /** Load dialog from a given configuration */
    load(config: IDeviceTypeMappingRouterConfiguration): void;
    /** Called after create button is clicked */
    onCreateClicked(e: any): void;
}

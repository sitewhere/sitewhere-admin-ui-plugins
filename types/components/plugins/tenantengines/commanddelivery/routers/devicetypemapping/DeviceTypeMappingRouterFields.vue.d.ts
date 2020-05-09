import { DialogSection } from "sitewhere-ide-components";
import { IDeviceTypeMappingRouterConfiguration } from "sitewhere-configuration-model";
import { IDeviceType } from "sitewhere-rest-api";
export default class DeviceTypeMappingRouterFields extends DialogSection {
    readonly deviceTypes: IDeviceType[];
    defaultDestination: string | null;
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(input: IDeviceTypeMappingRouterConfiguration): void;
    /** Save form data to an object */
    save(): IDeviceTypeMappingRouterConfiguration;
}

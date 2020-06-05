import { DialogSection } from "sitewhere-ide-components";
import { ICommandDestinationGenericConfiguration, IDeviceTypeMappingRouterConfiguration } from "sitewhere-configuration-model";
export default class SettingsFields extends DialogSection {
    readonly destinations: ICommandDestinationGenericConfiguration[];
    defaultDestination: string | null;
    configuration: IDeviceTypeMappingRouterConfiguration;
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(input: IDeviceTypeMappingRouterConfiguration): void;
    /** Save form data to an object */
    save(): IDeviceTypeMappingRouterConfiguration;
}

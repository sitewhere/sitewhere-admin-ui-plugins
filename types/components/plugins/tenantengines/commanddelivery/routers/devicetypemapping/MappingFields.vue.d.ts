import { DialogSection } from "sitewhere-ide-components";
import { ICommandDestinationGenericConfiguration, IDeviceTypeMapping } from "sitewhere-configuration-model";
import { IDeviceType } from "sitewhere-rest-api";
export default class MappingsFields extends DialogSection {
    readonly destinations: ICommandDestinationGenericConfiguration[];
    readonly deviceTypes: IDeviceType[];
    deviceType: string | null;
    destination: string | null;
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(input: IDeviceTypeMapping): void;
    /** Save form data to an object */
    save(): IDeviceTypeMapping;
}

import { DialogSection } from "sitewhere-ide-components";
import { IEventHubConfiguration } from "sitewhere-configuration-model";
export default class EventHubFields extends DialogSection {
    consumerGroupName: string;
    namespaceName: string;
    eventHubName: string;
    sasKeyName: string;
    sasKey: string;
    storageConnectionString: string;
    storageContainerName: string;
    hostNamePrefix: string;
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(input: IEventHubConfiguration): void;
    /** Save form data to an object */
    save(): {};
}

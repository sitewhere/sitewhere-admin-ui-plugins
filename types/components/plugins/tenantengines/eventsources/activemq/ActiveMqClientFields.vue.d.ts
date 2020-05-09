import { DialogSection } from "sitewhere-ide-components";
import { IActiveMqClientConfiguration } from "sitewhere-configuration-model";
export default class ActiveMqClientFields extends DialogSection {
    remoteUri: string;
    queueName: string;
    numConsumers: number;
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(input: IActiveMqClientConfiguration): void;
    /** Save form data to an object */
    save(): {};
}

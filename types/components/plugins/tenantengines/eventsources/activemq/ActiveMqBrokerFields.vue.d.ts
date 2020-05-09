import { DialogSection } from "sitewhere-ide-components";
import { IActiveMqBrokerConfiguration } from "sitewhere-configuration-model";
export default class ActiveMqBrokerFields extends DialogSection {
    brokerName: string;
    transportUri: string;
    queueName: string;
    numConsumers: number;
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(input: IActiveMqBrokerConfiguration): void;
    /** Save form data to an object */
    save(): {};
}

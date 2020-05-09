import { DialogSection } from "sitewhere-ide-components";
import { IRabbitMqConfiguration } from "sitewhere-configuration-model";
export default class RabbitMqFields extends DialogSection {
    connectionUri: string;
    queueName: string;
    numConsumers: number;
    reconnectInterval: number;
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(input: IRabbitMqConfiguration): void;
    /** Save form data to an object */
    save(): {};
}

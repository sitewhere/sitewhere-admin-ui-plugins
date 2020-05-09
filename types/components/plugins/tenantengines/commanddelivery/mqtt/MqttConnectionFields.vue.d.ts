import { DialogSection } from "sitewhere-ide-components";
import { IMqttCommandDestinationConfiguration } from "sitewhere-configuration-model";
export default class MqttConnectionFields extends DialogSection {
    protocol: string;
    hostname: string | null;
    port: number;
    protocols: {
        text: string;
        value: string;
    }[];
    qosValues: {
        text: string;
        value: number;
    }[];
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(input: IMqttCommandDestinationConfiguration): void;
    /** Save form data to an object */
    save(): {};
}

import { DialogSection } from "sitewhere-ide-components";
import { IMqttEventSourceConfiguration } from "sitewhere-configuration-model";
export default class MqttConnectionFields extends DialogSection {
    protocol: string;
    hostname: string | null;
    port: number;
    topic: string | null;
    qos: number;
    numThreads: number;
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
    load(input: IMqttEventSourceConfiguration): void;
    /** Save form data to an object */
    save(): {};
}

import { DialogSection } from "sitewhere-ide-components";
import { IMqttOutboundConnectorConfiguration } from "sitewhere-configuration-model";
export default class MqttConnectionFields extends DialogSection {
    protocol: string;
    hostname: string | null;
    port: number;
    outboundTopic: string | null;
    protocols: {
        text: string;
        value: string;
    }[];
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(input: IMqttOutboundConnectorConfiguration): void;
    /** Save form data to an object */
    save(): {};
}

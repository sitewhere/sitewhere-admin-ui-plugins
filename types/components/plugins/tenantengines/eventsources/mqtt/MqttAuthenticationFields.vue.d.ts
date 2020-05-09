import { DialogSection } from "sitewhere-ide-components";
import { IMqttEventSourceConfiguration, IMqttSecurityFields } from "sitewhere-configuration-model";
export default class MqttAuthenticationFields extends DialogSection {
    username: string | null;
    password: string | null;
    clientId: string | null;
    cleanSession: boolean | null;
    trustStorePath: string | null;
    trustStorePassword: string | null;
    keyStorePath: string | null;
    keyStorePassword: string | null;
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(input: IMqttEventSourceConfiguration): void;
    /** Save form data to an object */
    save(): IMqttSecurityFields;
}

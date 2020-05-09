import { DialogSection } from "sitewhere-ide-components";
import DefaultMqttParameterExtractorFields from "./DefaultMqttParameterExtractorFields.vue";
export default class DefaultMqttParameterExtractorConfiguration extends DialogSection {
    readonly tenantId: string;
    readonly fields: DefaultMqttParameterExtractorFields;
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(input: any): void;
    /** Save form data to an object */
    save(): {};
}

import { DialogSection } from "sitewhere-ide-components";
import { IDefaultMqttParameterExtractorConfiguration } from "sitewhere-configuration-model";
export default class DefaultMqttParameterExtractorFields extends DialogSection {
    readonly tenantId: string;
    commandTopicExpression: string | null;
    systemTopicExpression: string | null;
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(input: IDefaultMqttParameterExtractorConfiguration): void;
    /** Save form data to an object */
    save(): IDefaultMqttParameterExtractorConfiguration;
}

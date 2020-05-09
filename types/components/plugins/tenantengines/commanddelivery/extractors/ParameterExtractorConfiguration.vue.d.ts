import { DialogSection } from "sitewhere-ide-components";
import { IParameterExtractorGenericConfiguration } from "sitewhere-configuration-model";
export default class ParameterExtractorConfiguration extends DialogSection {
    readonly tenantId: string;
    readonly parameterExtractor: IParameterExtractorGenericConfiguration;
    readonly details: DialogSection;
    onExtractorTypeUpdated(): void;
    /** Parameter extractor type */
    get extractorType(): string | null;
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(input: IParameterExtractorGenericConfiguration): void;
    /** Save form data to an object */
    save(): {};
}

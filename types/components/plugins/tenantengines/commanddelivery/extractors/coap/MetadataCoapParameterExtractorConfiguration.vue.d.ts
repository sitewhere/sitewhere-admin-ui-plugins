import { DialogSection } from "sitewhere-ide-components";
import MetadataCoapParameterExtractorFields from "./MetadataCoapParameterExtractorFields.vue";
import { IMetadataCoapParameterExtractorConfiguration } from "sitewhere-configuration-model";
export default class MetadataCoapParameterExtractorConfiguration extends DialogSection {
    readonly tenantId: string;
    readonly fields: MetadataCoapParameterExtractorFields;
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(input: IMetadataCoapParameterExtractorConfiguration): void;
    /** Save form data to an object */
    save(): IMetadataCoapParameterExtractorConfiguration;
}

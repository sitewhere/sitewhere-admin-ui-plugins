import { DialogSection } from "sitewhere-ide-components";
import { IMetadataCoapParameterExtractorConfiguration } from "sitewhere-configuration-model";
export default class MetadataCoapParameterExtractorFields extends DialogSection {
    readonly tenantId: string;
    hostnameMetadataField: string | null;
    portMetadataField: string | null;
    urlMetadataField: string | null;
    methodMetadataField: string | null;
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(input: IMetadataCoapParameterExtractorConfiguration): void;
    /** Save form data to an object */
    save(): IMetadataCoapParameterExtractorConfiguration;
}

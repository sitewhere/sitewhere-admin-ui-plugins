import Vue from "vue";
import { BaseDialog } from "sitewhere-ide-components";
import ParameterExtractorConfiguration from "./extractors/ParameterExtractorConfiguration.vue";
import { ICommandDestinationGenericConfiguration, IParameterExtractorGenericConfiguration } from "sitewhere-configuration-model";
export default class CommandDestinationDialog extends Vue {
    readonly tenantId: string;
    readonly type: string;
    readonly icon: string;
    readonly title: string;
    readonly width: number;
    readonly cancelLabel: string;
    readonly createLabel: string;
    readonly visible: boolean;
    readonly idsInUse: string[];
    readonly parameterExtractors: {
        text: string;
        value: string;
    }[];
    readonly dialog: BaseDialog;
    readonly extractor: ParameterExtractorConfiguration;
    id: string | null;
    parameterExtractor: IParameterExtractorGenericConfiguration | null;
    /** Parameter extractor type */
    get extractorType(): string | null;
    /** Blank configuration if type updated */
    set extractorType(value: string | null);
    /** Save dialog fields */
    save(): {
        id: string | null;
        type: string;
    };
    /** Reset the dialog */
    reset(): void;
    /** Validate fields */
    validate(): boolean;
    /** Load dialog from a given configuration */
    load(config: ICommandDestinationGenericConfiguration): void;
    /** Set the active tab */
    setActiveTab(tab: number): void;
    /** Called after create button is clicked */
    onCreateClicked(e: any): void;
    /** Called after cancel button is clicked */
    onCancelClicked(e: any): void;
}

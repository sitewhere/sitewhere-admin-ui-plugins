import { MicroserviceIcon } from "sitewhere-ide-common";
import { DialogComponent } from "sitewhere-ide-components";
import CommandDestinationDialog from "../CommandDestinationDialog.vue";
import CoapFields from "./CoapFields.vue";
import { ICommandDestinationGenericConfiguration } from "sitewhere-configuration-model";
export default class CoapCommandDestinationDialog extends DialogComponent<ICommandDestinationGenericConfiguration> {
    readonly tenantId: string;
    readonly title: string;
    readonly width: number;
    readonly createLabel: string;
    readonly cancelLabel: string;
    readonly idsInUse: string[];
    readonly dialog: CommandDestinationDialog;
    readonly coap: CoapFields;
    /** List of parameter extractors */
    parameterExtractors: {
        text: string;
        value: string;
    }[];
    /** Get icon for dialog */
    get icon(): MicroserviceIcon;
    /** Generate payload from UI */
    generatePayload(): any;
    /** Reset dialog contents */
    reset(): void;
    /** Load dialog from a given configuration */
    load(config: ICommandDestinationGenericConfiguration): void;
    /** Called after create button is clicked */
    onCreateClicked(e: any): void;
}

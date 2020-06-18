import { MicroserviceIcon } from "sitewhere-ide-common";
import { DialogComponent } from "sitewhere-ide-components";
import LabelGeneratorDialog from "../../LabelGeneratorDialog.vue";
import QrCodeGeneratorFields from "./QrCodeGeneratorFields.vue";
import { ILabelGeneratorGenericConfiguration } from "sitewhere-configuration-model";
export default class QrCodeLabelGeneratorDialog extends DialogComponent<ILabelGeneratorGenericConfiguration> {
    readonly tenantId: string;
    readonly title: string;
    readonly width: number;
    readonly createLabel: string;
    readonly cancelLabel: string;
    readonly idsInUse: string[];
    readonly dialog: LabelGeneratorDialog;
    readonly style: QrCodeGeneratorFields;
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
    load(config: ILabelGeneratorGenericConfiguration): void;
    /** Called after create button is clicked */
    onCreateClicked(e: any): void;
}

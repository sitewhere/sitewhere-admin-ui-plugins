import { DialogComponent, BaseDialog } from "sitewhere-ide-components";
import { ILabelGeneratorGenericConfiguration } from "sitewhere-configuration-model";
export default class LabelGeneratorDialog extends DialogComponent<ILabelGeneratorGenericConfiguration> {
    readonly tenantId: string;
    readonly type: string;
    readonly icon: string;
    readonly title: string;
    readonly width: number;
    readonly cancelLabel: string;
    readonly createLabel: string;
    readonly visible: boolean;
    readonly idsInUse: string[];
    readonly dialog: BaseDialog;
    id: string | null;
    /** Save dialog fields */
    save(): any;
    /** Reset the dialog */
    reset(): void;
    /** Validate fields */
    validate(): boolean;
    /** Load dialog from a given configuration */
    load(config: ILabelGeneratorGenericConfiguration): void;
    /** Set the active tab */
    setActiveTab(tab: number): void;
    /** Called after create button is clicked */
    onCreateClicked(e: any): void;
    /** Called after cancel button is clicked */
    onCancelClicked(e: any): void;
}

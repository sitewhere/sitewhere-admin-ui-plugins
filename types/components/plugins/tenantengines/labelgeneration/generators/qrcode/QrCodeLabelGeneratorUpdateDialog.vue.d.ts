import Vue from "vue";
import QrCodeLabelGeneratorDialog from "./QrCodeLabelGeneratorDialog.vue";
import { ILabelGeneratorGenericConfiguration } from "sitewhere-configuration-model";
export default class QrCodeLabelGeneratorUpdateDialog extends Vue {
    readonly tenantId: string;
    readonly dialog: QrCodeLabelGeneratorDialog;
    originalId: string | null;
    idsInUse: string[];
    /** Emit payload */
    onPayload(config: ILabelGeneratorGenericConfiguration): void;
    /** Open dialog */
    openDialog(config: ILabelGeneratorGenericConfiguration, idsInUse: string[]): void;
}

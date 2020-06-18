import Vue from "vue";
import QrCodeLabelGeneratorDialog from "./QrCodeLabelGeneratorDialog.vue";
import { ILabelGeneratorGenericConfiguration } from "sitewhere-configuration-model";
export default class QrCodeLabelGeneratorCreateDialog extends Vue {
    readonly tenantId: string;
    readonly dialog: QrCodeLabelGeneratorDialog;
    idsInUse: string[];
    /** Emit payload */
    onPayload(payload: ILabelGeneratorGenericConfiguration): void;
    /** Open dialog */
    openDialog(idsInUse: string[]): void;
}

import Vue from "vue";
import CoapCommandDestinationDialog from "./CoapCommandDestinationDialog.vue";
import { ICoapCommandDestinationConfiguration } from "sitewhere-configuration-model";
export default class CoapCommandDestinationCreateDialog extends Vue {
    readonly tenantId: string;
    readonly dialog: CoapCommandDestinationDialog;
    idsInUse: string[];
    /** Emit payload */
    onPayload(payload: ICoapCommandDestinationConfiguration): void;
    /** Open dialog */
    openDialog(idsInUse: string[]): void;
}

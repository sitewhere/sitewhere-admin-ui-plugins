import Vue from "vue";
import CoapEventSourceDialog from "./CoapEventSourceDialog.vue";
import { ICoapServerConfiguration } from "sitewhere-configuration-model";
export default class CoapEventSourceCreateDialog extends Vue {
    readonly tenantId: string;
    readonly dialog: CoapEventSourceDialog;
    idsInUse: string[];
    /** Emit payload */
    onPayload(payload: ICoapServerConfiguration): void;
    /** Open dialog */
    openDialog(idsInUse: string[]): void;
}

import Vue from "vue";
import CoapEventSourceDialog from "./CoapEventSourceDialog.vue";
import { IEventSourceGenericConfiguration } from "sitewhere-configuration-model";
export default class CoapEventSourceUpdateDialog extends Vue {
    readonly tenantId: string;
    readonly dialog: CoapEventSourceDialog;
    originalId: string | null;
    idsInUse: string[];
    /** Emit payload */
    onPayload(config: IEventSourceGenericConfiguration): void;
    /** Open dialog */
    openDialog(config: IEventSourceGenericConfiguration, idsInUse: string[]): void;
}

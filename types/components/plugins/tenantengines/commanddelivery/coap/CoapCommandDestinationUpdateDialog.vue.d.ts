import Vue from "vue";
import CoapCommandDestinationDialog from "./CoapCommandDestinationDialog.vue";
import { ICommandDestinationGenericConfiguration } from "sitewhere-configuration-model";
export default class CoapCommandDestinationUpdateDialog extends Vue {
    readonly tenantId: string;
    readonly dialog: CoapCommandDestinationDialog;
    originalId: string | null;
    idsInUse: string[];
    /** Emit payload */
    onPayload(config: ICommandDestinationGenericConfiguration): void;
    /** Open dialog */
    openDialog(config: ICommandDestinationGenericConfiguration, idsInUse: string[]): void;
}

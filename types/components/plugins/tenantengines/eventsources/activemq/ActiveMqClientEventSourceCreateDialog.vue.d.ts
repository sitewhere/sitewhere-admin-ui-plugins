import Vue from "vue";
import ActiveMqClientEventSourceDialog from "./ActiveMqClientEventSourceDialog.vue";
import { IActiveMqClientConfiguration } from "sitewhere-configuration-model";
export default class ActiveMqBrokerEventSourceCreateDialog extends Vue {
    readonly tenantId: string;
    readonly dialog: ActiveMqClientEventSourceDialog;
    idsInUse: string[];
    /** Emit payload */
    onPayload(payload: IActiveMqClientConfiguration): void;
    /** Open dialog */
    openDialog(idsInUse: string[]): void;
}

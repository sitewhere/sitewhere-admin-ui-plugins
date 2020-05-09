import Vue from "vue";
import ActiveMqBrokerEventSourceDialog from "./ActiveMqBrokerEventSourceDialog.vue";
import { IActiveMqBrokerConfiguration } from "sitewhere-configuration-model";
export default class ActiveMqBrokerEventSourceCreateDialog extends Vue {
    readonly tenantId: string;
    readonly dialog: ActiveMqBrokerEventSourceDialog;
    idsInUse: string[];
    /** Emit payload */
    onPayload(payload: IActiveMqBrokerConfiguration): void;
    /** Open dialog */
    openDialog(idsInUse: string[]): void;
}

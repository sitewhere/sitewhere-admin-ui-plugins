import Vue from "vue";
import ActiveMqBrokerEventSourceDialog from "./ActiveMqBrokerEventSourceDialog.vue";
import { IEventSourceGenericConfiguration } from "sitewhere-configuration-model";
export default class ActiveMqBrokerEventSourceUpdateDialog extends Vue {
    readonly tenantId: string;
    readonly dialog: ActiveMqBrokerEventSourceDialog;
    originalId: string | null;
    idsInUse: string[];
    /** Emit payload */
    onPayload(config: IEventSourceGenericConfiguration): void;
    /** Open dialog */
    openDialog(config: IEventSourceGenericConfiguration, idsInUse: string[]): void;
}

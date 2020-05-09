import Vue from "vue";
import ActiveMqClientEventSourceDialog from "./ActiveMqClientEventSourceDialog.vue";
import { IEventSourceGenericConfiguration } from "sitewhere-configuration-model";
export default class ActiveMqClientEventSourceUpdateDialog extends Vue {
    readonly tenantId: string;
    readonly dialog: ActiveMqClientEventSourceDialog;
    originalId: string | null;
    idsInUse: string[];
    /** Emit payload */
    onPayload(config: IEventSourceGenericConfiguration): void;
    /** Open dialog */
    openDialog(config: IEventSourceGenericConfiguration, idsInUse: string[]): void;
}

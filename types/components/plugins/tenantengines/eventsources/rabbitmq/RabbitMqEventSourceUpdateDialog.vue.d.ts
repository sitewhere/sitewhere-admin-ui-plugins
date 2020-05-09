import Vue from "vue";
import RabbitMqEventSourceDialog from "./RabbitMqEventSourceDialog.vue";
import { IEventSourceGenericConfiguration } from "sitewhere-configuration-model";
export default class RabbitMqEventSourceUpdateDialog extends Vue {
    readonly tenantId: string;
    readonly dialog: RabbitMqEventSourceDialog;
    originalId: string | null;
    idsInUse: string[];
    /** Emit payload */
    onPayload(config: IEventSourceGenericConfiguration): void;
    /** Open dialog */
    openDialog(config: IEventSourceGenericConfiguration, idsInUse: string[]): void;
}

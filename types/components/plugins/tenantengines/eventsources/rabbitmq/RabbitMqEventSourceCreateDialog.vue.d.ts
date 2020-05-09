import Vue from "vue";
import RabbitMqEventSourceDialog from "./RabbitMqEventSourceDialog.vue";
import { IRabbitMqConfiguration } from "sitewhere-configuration-model";
export default class RabbitMqEventSourceCreateDialog extends Vue {
    readonly tenantId: string;
    readonly dialog: RabbitMqEventSourceDialog;
    idsInUse: string[];
    /** Emit payload */
    onPayload(payload: IRabbitMqConfiguration): void;
    /** Open dialog */
    openDialog(idsInUse: string[]): void;
}

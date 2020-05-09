import Vue from "vue";
import MqttEventSourceDialog from "./MqttEventSourceDialog.vue";
import { IMqttEventSourceConfiguration } from "sitewhere-configuration-model";
export default class MqttEventSourceCreateDialog extends Vue {
    readonly tenantId: string;
    readonly dialog: MqttEventSourceDialog;
    idsInUse: string[];
    /** Emit payload */
    onPayload(payload: IMqttEventSourceConfiguration): void;
    /** Open dialog */
    openDialog(idsInUse: string[]): void;
}

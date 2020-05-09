import Vue from "vue";
import MqttCommandDestinationDialog from "./MqttCommandDestinationDialog.vue";
import { IMqttCommandDestinationConfiguration } from "sitewhere-configuration-model";
export default class MqttCommandDestinationCreateDialog extends Vue {
    readonly tenantId: string;
    readonly dialog: MqttCommandDestinationDialog;
    idsInUse: string[];
    /** Emit payload */
    onPayload(payload: IMqttCommandDestinationConfiguration): void;
    /** Open dialog */
    openDialog(idsInUse: string[]): void;
}

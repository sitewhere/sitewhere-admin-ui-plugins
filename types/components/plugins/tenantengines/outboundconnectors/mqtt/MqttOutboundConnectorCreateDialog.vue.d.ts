import Vue from "vue";
import MqttOutboundConnectorDialog from "./MqttOutboundConnectorDialog.vue";
import { IMqttOutboundConnectorConfiguration } from "sitewhere-configuration-model";
export default class MqttOutboundConnectorCreateDialog extends Vue {
    readonly tenantId: string;
    readonly dialog: MqttOutboundConnectorDialog;
    idsInUse: string[];
    /** Emit payload */
    onPayload(payload: IMqttOutboundConnectorConfiguration): void;
    /** Open dialog */
    openDialog(idsInUse: string[]): void;
}

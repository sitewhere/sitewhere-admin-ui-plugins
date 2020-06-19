import Vue from "vue";
import MqttOutboundConnectorDialog from "./MqttOutboundConnectorDialog.vue";
import { IOutboundConnectorGenericConfiguration } from "sitewhere-configuration-model";
export default class MqttOutboundConnectorUpdateDialog extends Vue {
    readonly tenantId: string;
    readonly dialog: MqttOutboundConnectorDialog;
    originalId: string | null;
    idsInUse: string[];
    /** Emit payload */
    onPayload(config: IOutboundConnectorGenericConfiguration): void;
    /** Open dialog */
    openDialog(config: IOutboundConnectorGenericConfiguration, idsInUse: string[]): void;
}

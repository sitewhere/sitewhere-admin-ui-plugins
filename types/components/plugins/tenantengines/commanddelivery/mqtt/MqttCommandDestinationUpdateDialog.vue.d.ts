import Vue from "vue";
import MqttCommandDestinationDialog from "./MqttCommandDestinationDialog.vue";
import { ICommandDestinationGenericConfiguration } from "sitewhere-configuration-model";
export default class MqttCommandDestinationUpdateDialog extends Vue {
    readonly tenantId: string;
    readonly dialog: MqttCommandDestinationDialog;
    originalId: string | null;
    idsInUse: string[];
    /** Emit payload */
    onPayload(config: ICommandDestinationGenericConfiguration): void;
    /** Open dialog */
    openDialog(config: ICommandDestinationGenericConfiguration, idsInUse: string[]): void;
}

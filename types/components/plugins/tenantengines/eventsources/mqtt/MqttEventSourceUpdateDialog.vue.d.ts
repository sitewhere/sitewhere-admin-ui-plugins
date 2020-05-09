import Vue from "vue";
import MqttEventSourceDialog from "./MqttEventSourceDialog.vue";
import { IEventSourceGenericConfiguration } from "sitewhere-configuration-model";
export default class MqttEventSourceUpdateDialog extends Vue {
    readonly tenantId: string;
    readonly dialog: MqttEventSourceDialog;
    originalId: string | null;
    idsInUse: string[];
    /** Emit payload */
    onPayload(config: IEventSourceGenericConfiguration): void;
    /** Open dialog */
    openDialog(config: IEventSourceGenericConfiguration, idsInUse: string[]): void;
}

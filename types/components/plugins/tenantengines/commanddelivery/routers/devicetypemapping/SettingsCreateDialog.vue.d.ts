import Vue from "vue";
import SettingsDialog from "./SettingsDialog.vue";
import { ICommandDestinationGenericConfiguration, IDeviceTypeMappingRouterConfiguration } from "sitewhere-configuration-model";
export default class SettingsCreateDialog extends Vue {
    readonly destinations: ICommandDestinationGenericConfiguration[];
    readonly dialog: SettingsDialog;
    idsInUse: string[];
    /** Emit payload */
    onPayload(payload: IDeviceTypeMappingRouterConfiguration): void;
    /** Open dialog */
    openDialog(): void;
}

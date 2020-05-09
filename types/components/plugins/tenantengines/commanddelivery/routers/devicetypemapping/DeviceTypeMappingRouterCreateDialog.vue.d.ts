import Vue from "vue";
import DeviceTypeMappingRouterDialog from "./DeviceTypeMappingRouterDialog.vue";
import { IDeviceTypeMappingRouterConfiguration } from "sitewhere-configuration-model";
export default class DeviceTypeMappingRouterCreateDialog extends Vue {
    readonly dialog: DeviceTypeMappingRouterDialog;
    idsInUse: string[];
    /** Emit payload */
    onPayload(payload: IDeviceTypeMappingRouterConfiguration): void;
    /** Open dialog */
    openDialog(): void;
}

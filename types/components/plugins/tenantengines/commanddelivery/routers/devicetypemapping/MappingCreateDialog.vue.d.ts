import Vue from "vue";
import MappingDialog from "./MappingDialog.vue";
import { ICommandDestinationGenericConfiguration, IDeviceTypeMapping } from "sitewhere-configuration-model";
import { IDeviceType } from "sitewhere-rest-api";
export default class MappingCreateDialog extends Vue {
    readonly destinations: ICommandDestinationGenericConfiguration[];
    readonly deviceTypes: IDeviceType[];
    readonly dialog: MappingDialog;
    idsInUse: string[];
    /** Emit payload */
    onPayload(payload: IDeviceTypeMapping): void;
    /** Open dialog */
    openDialog(): void;
}

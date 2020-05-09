import Vue from "vue";
import EventHubEventSourceDialog from "./EventHubEventSourceDialog.vue";
import { IEventHubConfiguration } from "sitewhere-configuration-model";
export default class EventHubEventSourceCreateDialog extends Vue {
    readonly tenantId: string;
    readonly dialog: EventHubEventSourceDialog;
    idsInUse: string[];
    /** Emit payload */
    onPayload(payload: IEventHubConfiguration): void;
    /** Open dialog */
    openDialog(idsInUse: string[]): void;
}

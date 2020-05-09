import Vue from "vue";
import EventHubEventSourceDialog from "./EventHubEventSourceDialog.vue";
import { IEventSourceGenericConfiguration } from "sitewhere-configuration-model";
export default class EventHubEventSourceUpdateDialog extends Vue {
    readonly tenantId: string;
    readonly dialog: EventHubEventSourceDialog;
    originalId: string | null;
    idsInUse: string[];
    /** Emit payload */
    onPayload(config: IEventSourceGenericConfiguration): void;
    /** Open dialog */
    openDialog(config: IEventSourceGenericConfiguration, idsInUse: string[]): void;
}

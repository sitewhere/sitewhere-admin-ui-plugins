import Vue from "vue";
import DatastoreDialog from "./DatastoreDialog.vue";
import { IDatastoreDefinition } from "sitewhere-configuration-model";
import { IInstanceConfiguration } from "sitewhere-rest-api";
export default class DatastoreCreateDialog extends Vue {
    readonly instance: IInstanceConfiguration;
    readonly dialog: DatastoreDialog;
    idsInUse: string[];
    /** Emit payload */
    onPayload(payload: IDatastoreDefinition): void;
    /** Open dialog */
    openDialog(): void;
}

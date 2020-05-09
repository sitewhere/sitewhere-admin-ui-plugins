import Vue from "vue";
import DatastoreDialog from "./DatastoreDialog.vue";
import { IDatastoreDefinition } from "sitewhere-configuration-model";
import { IInstanceConfiguration } from "sitewhere-rest-api";
export default class DatastoreUpdateDialog extends Vue {
    readonly instance: IInstanceConfiguration;
    readonly dialog: DatastoreDialog;
    /** Emit payload */
    onPayload(definition: IDatastoreDefinition): void;
    /** Open dialog */
    openDialog(definition: IDatastoreDefinition): void;
}

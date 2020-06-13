import Vue from "vue";
import RdbDatastoreDialog from "./RdbDatastoreDialog.vue";
import { IDatastoreDefinition } from "sitewhere-configuration-model";
import { IInstanceConfiguration } from "sitewhere-rest-api";
export default class RdbDatastoreUpdateDialog extends Vue {
    readonly instance: IInstanceConfiguration;
    readonly dialog: RdbDatastoreDialog;
    /** Emit payload */
    onPayload(definition: IDatastoreDefinition): void;
    /** Open dialog */
    openDialog(definition: IDatastoreDefinition): void;
}

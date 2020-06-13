import Vue from "vue";
import RdbDatastoreDialog from "./RdbDatastoreDialog.vue";
import { IDatastoreDefinition } from "sitewhere-configuration-model";
import { IInstanceConfiguration } from "sitewhere-rest-api";
export default class RdbDatastoreCreateDialog extends Vue {
    readonly instance: IInstanceConfiguration;
    readonly dialog: RdbDatastoreDialog;
    idsInUse: string[];
    /** Emit payload */
    onPayload(payload: IDatastoreDefinition): void;
    /** Open dialog */
    openDialog(): void;
}

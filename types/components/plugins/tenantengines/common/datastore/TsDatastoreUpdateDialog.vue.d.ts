import Vue from "vue";
import TsDatastoreDialog from "./TsDatastoreDialog.vue";
import { IDatastoreDefinition } from "sitewhere-configuration-model";
import { IInstanceConfiguration } from "sitewhere-rest-api";
export default class TsDatastoreUpdateDialog extends Vue {
    readonly instance: IInstanceConfiguration;
    readonly dialog: TsDatastoreDialog;
    /** Emit payload */
    onPayload(definition: IDatastoreDefinition): void;
    /** Open dialog */
    openDialog(definition: IDatastoreDefinition): void;
}

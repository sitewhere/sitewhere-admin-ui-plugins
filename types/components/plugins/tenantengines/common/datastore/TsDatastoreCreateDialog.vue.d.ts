import Vue from "vue";
import TsDatastoreDialog from "./TsDatastoreDialog.vue";
import { IDatastoreDefinition } from "sitewhere-configuration-model";
import { IInstanceConfiguration } from "sitewhere-rest-api";
export default class TsDatastoreCreateDialog extends Vue {
    readonly instance: IInstanceConfiguration;
    readonly dialog: TsDatastoreDialog;
    idsInUse: string[];
    /** Emit payload */
    onPayload(payload: IDatastoreDefinition): void;
    /** Open dialog */
    openDialog(): void;
}

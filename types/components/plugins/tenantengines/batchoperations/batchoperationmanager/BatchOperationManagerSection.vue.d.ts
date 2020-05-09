import Vue from "vue";
import { MicroserviceIcon } from "sitewhere-ide-common";
import { IBatchOperationManagerConfiguration } from "sitewhere-configuration-model";
import BatchOperationManagerDialog from "./BatchOperationManagerDialog.vue";
export default class BatchOperationManagerSection extends Vue {
    readonly configuration: IBatchOperationManagerConfiguration;
    readonly dialog: BatchOperationManagerDialog;
    /** Get icon for dialog */
    get icon(): MicroserviceIcon;
    /** Get throttle delay(ms) */
    get throttleDelayMs(): number;
    /** Called to edit batch operation manager settings */
    onEditBatchOperationManager(): void;
    /** Handle update */
    onBatchOperationManagerUpdate(updated: IBatchOperationManagerConfiguration): void;
}

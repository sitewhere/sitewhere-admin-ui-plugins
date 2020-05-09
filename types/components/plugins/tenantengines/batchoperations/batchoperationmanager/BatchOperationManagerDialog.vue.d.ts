import { MicroserviceIcon, ITabbedComponent } from "sitewhere-ide-common";
import { IBatchOperationManagerConfiguration } from "sitewhere-configuration-model";
import { DialogComponent } from "sitewhere-ide-components";
import BatchOperationManagerFields from "./BatchOperationManagerFields.vue";
export default class BatchOperationManagerDialog extends DialogComponent<IBatchOperationManagerConfiguration> {
    readonly dialog: ITabbedComponent;
    readonly manager: BatchOperationManagerFields;
    /** Get icon for dialog */
    get icon(): MicroserviceIcon;
    /** Generate payload from UI */
    generatePayload(): any;
    /** Reset dialog contents */
    reset(): void;
    /** Load dialog from a given configuration */
    load(config: IBatchOperationManagerConfiguration): void;
    /** Called after create button is clicked */
    onCreateClicked(e: any): void;
}

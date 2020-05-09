import { MicroserviceIcon } from "sitewhere-ide-common";
import { DialogComponent } from "sitewhere-ide-components";
import { IEventSourceGenericConfiguration } from "sitewhere-configuration-model";
import EventSourceDialog from "../EventSourceDialog.vue";
import ActiveMqClientFields from "./ActiveMqClientFields.vue";
export default class ActiveMqClientEventSourceDialog extends DialogComponent<IEventSourceGenericConfiguration> {
    readonly tenantId: string;
    readonly title: string;
    readonly width: number;
    readonly createLabel: string;
    readonly cancelLabel: string;
    readonly idsInUse: string[];
    readonly dialog: EventSourceDialog;
    readonly client: ActiveMqClientFields;
    /** Get icon for dialog */
    get icon(): MicroserviceIcon;
    /** Generate payload from UI */
    generatePayload(): any;
    /** Reset dialog contents */
    reset(): void;
    /** Load dialog from a given configuration */
    load(config: IEventSourceGenericConfiguration): void;
    /** Called after create button is clicked */
    onCreateClicked(e: any): void;
}

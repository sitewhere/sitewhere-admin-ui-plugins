import { MicroserviceIcon } from "sitewhere-ide-common";
import { IEventSourceGenericConfiguration } from "sitewhere-configuration-model";
import { DialogComponent } from "sitewhere-ide-components";
import EventSourceDialog from "../EventSourceDialog.vue";
import ActiveMqBrokerFields from "./ActiveMqBrokerFields.vue";
export default class ActiveMqBrokerEventSourceDialog extends DialogComponent<IEventSourceGenericConfiguration> {
    readonly tenantId: string;
    readonly title: string;
    readonly width: number;
    readonly createLabel: string;
    readonly cancelLabel: string;
    readonly idsInUse: string[];
    readonly dialog: EventSourceDialog;
    readonly broker: ActiveMqBrokerFields;
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

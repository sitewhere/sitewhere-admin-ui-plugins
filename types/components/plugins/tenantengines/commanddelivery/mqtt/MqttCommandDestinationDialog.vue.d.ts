import { MicroserviceIcon } from "sitewhere-ide-common";
import { DialogComponent } from "sitewhere-ide-components";
import { ICommandDestinationGenericConfiguration } from "sitewhere-configuration-model";
import CommandDestinationDialog from "../CommandDestinationDialog.vue";
import MqttConnectionFields from "./MqttConnectionFields.vue";
import MqttAuthenticationFields from "./MqttAuthenticationFields.vue";
export default class MqttCommandDestinationDialog extends DialogComponent<ICommandDestinationGenericConfiguration> {
    readonly tenantId: string;
    readonly title: string;
    readonly width: number;
    readonly createLabel: string;
    readonly cancelLabel: string;
    readonly idsInUse: string[];
    readonly dialog: CommandDestinationDialog;
    readonly connection: MqttConnectionFields;
    readonly authentication: MqttAuthenticationFields;
    /** List of parameter extractors */
    parameterExtractors: {
        text: string;
        value: string;
    }[];
    /** Get icon for dialog */
    get icon(): MicroserviceIcon;
    /** Generate payload from UI */
    generatePayload(): any;
    /** Reset dialog contents */
    reset(): void;
    /** Load dialog from a given configuration */
    load(config: ICommandDestinationGenericConfiguration): void;
    /** Called after create button is clicked */
    onCreateClicked(e: any): void;
}

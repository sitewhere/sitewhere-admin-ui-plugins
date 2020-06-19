import { MicroserviceIcon } from "sitewhere-ide-common";
import { DialogComponent } from "sitewhere-ide-components";
import { IOutboundConnectorGenericConfiguration } from "sitewhere-configuration-model";
import OutboundConnectorDialog from "../OutboundConnectorDialog.vue";
import MqttConnectionFields from "./MqttConnectionFields.vue";
import MqttAuthenticationFields from "./MqttAuthenticationFields.vue";
export default class MqttOutboundConnectorDialog extends DialogComponent<IOutboundConnectorGenericConfiguration> {
    readonly tenantId: string;
    readonly title: string;
    readonly width: number;
    readonly createLabel: string;
    readonly cancelLabel: string;
    readonly idsInUse: string[];
    readonly dialog: OutboundConnectorDialog;
    readonly connection: MqttConnectionFields;
    readonly authentication: MqttAuthenticationFields;
    /** Get icon for dialog */
    get icon(): MicroserviceIcon;
    /** Generate payload from UI */
    generatePayload(): any;
    /** Reset dialog contents */
    reset(): void;
    /** Load dialog from a given configuration */
    load(config: IOutboundConnectorGenericConfiguration): void;
    /** Called after create button is clicked */
    onCreateClicked(e: any): void;
}

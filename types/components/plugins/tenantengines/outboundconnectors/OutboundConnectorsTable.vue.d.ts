import Vue from "vue";
import { MicroserviceIcon } from "sitewhere-ide-common";
import NewOutboundConnectorChooser from "./NewOutboundConnectorChooser.vue";
import MqttOutboundConnectorCreateDialog from "./mqtt/MqttOutboundConnectorCreateDialog.vue";
import MqttOutboundConnectorUpdateDialog from "./mqtt/MqttOutboundConnectorUpdateDialog.vue";
import { IOutboundConnectorGenericConfiguration } from "sitewhere-configuration-model";
export default class OutboundConnectorsTable extends Vue {
    readonly tenantId: string;
    readonly connectors: IOutboundConnectorGenericConfiguration[];
    readonly chooser: NewOutboundConnectorChooser;
    readonly mqttCreate: MqttOutboundConnectorCreateDialog;
    readonly mqttUpdate: MqttOutboundConnectorUpdateDialog;
    headers: any[];
    /** Event sources in format for display */
    connectorsAsSortedArray: any[];
    onConnectorsUpdated(): void;
    /** Get page icon */
    get icon(): MicroserviceIcon;
    /** Get list of ids already in use */
    findIdsInUse(exclude?: string): string[];
    /** Get connector index based on id */
    getConnectorIndex(id: string): number | null;
    /** Get a connector by id */
    getConnectorById(id: string): IOutboundConnectorGenericConfiguration | null;
    /** Get connectors as a sorted array */
    calculateConnectorsAsSortedArray(): void;
    /** Add new connector */
    onAddConnector(): void;
    /** Called to create a new connector based on type */
    onConnectorCreate(id: string): void;
    /** Called when connector is added */
    onConnectorAdded(config: IOutboundConnectorGenericConfiguration): void;
    /** Open connector by id */
    onOpenConnector(id: string): void;
    /** Called when connector is updated */
    onConnectorUpdated(originalId: string, config: IOutboundConnectorGenericConfiguration): void;
    /** Delete connector by id */
    onDeleteConnector(id: string): void;
}

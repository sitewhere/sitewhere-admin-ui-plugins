import Vue from "vue";
import { MicroserviceIcon } from "sitewhere-ide-common";
import NewEventSourceChooser from "./NewEventSourceChooser.vue";
import ActiveMqBrokerEventSourceCreateDialog from "./activemq/ActiveMqBrokerEventSourceCreateDialog.vue";
import ActiveMqBrokerEventSourceUpdateDialog from "./activemq/ActiveMqBrokerEventSourceUpdateDialog.vue";
import ActiveMqClientEventSourceCreateDialog from "./activemq/ActiveMqClientEventSourceCreateDialog.vue";
import ActiveMqClientEventSourceUpdateDialog from "./activemq/ActiveMqClientEventSourceUpdateDialog.vue";
import CoapEventSourceCreateDialog from "./coap/CoapEventSourceCreateDialog.vue";
import CoapEventSourceUpdateDialog from "./coap/CoapEventSourceUpdateDialog.vue";
import EventHubEventSourceCreateDialog from "./azure/EventHubEventSourceCreateDialog.vue";
import EventHubEventSourceUpdateDialog from "./azure/EventHubEventSourceUpdateDialog.vue";
import MqttEventSourceCreateDialog from "./mqtt/MqttEventSourceCreateDialog.vue";
import MqttEventSourceUpdateDialog from "./mqtt/MqttEventSourceUpdateDialog.vue";
import RabbitMqEventSourceCreateDialog from "./rabbitmq/RabbitMqEventSourceCreateDialog.vue";
import RabbitMqEventSourceUpdateDialog from "./rabbitmq/RabbitMqEventSourceUpdateDialog.vue";
import { IEventSourceGenericConfiguration } from "sitewhere-configuration-model";
export default class EventSourcesTable extends Vue {
    readonly tenantId: string;
    readonly eventSources: IEventSourceGenericConfiguration[];
    readonly chooser: NewEventSourceChooser;
    readonly amqBrokerCreate: ActiveMqBrokerEventSourceCreateDialog;
    readonly amqBrokerUpdate: ActiveMqBrokerEventSourceUpdateDialog;
    readonly amqClientCreate: ActiveMqClientEventSourceCreateDialog;
    readonly amqClientUpdate: ActiveMqClientEventSourceUpdateDialog;
    readonly coapCreate: CoapEventSourceCreateDialog;
    readonly coapUpdate: CoapEventSourceUpdateDialog;
    readonly eventHubCreate: EventHubEventSourceCreateDialog;
    readonly eventHubUpdate: EventHubEventSourceUpdateDialog;
    readonly mqttCreate: MqttEventSourceCreateDialog;
    readonly mqttUpdate: MqttEventSourceUpdateDialog;
    readonly rabbitMqCreate: RabbitMqEventSourceCreateDialog;
    readonly rabbitMqUpdate: RabbitMqEventSourceUpdateDialog;
    headers: any[];
    /** Event sources in format for display */
    eventSourcesAsSortedArray: any[];
    onEventSourcesUpdated(): void;
    /** Get page icon */
    get icon(): MicroserviceIcon;
    /** Get list of ids already in use */
    findIdsInUse(exclude?: string): string[];
    /** Get event source index based on id */
    getEventSourceIndex(id: string): number | null;
    /** Get an event source by id */
    getEventSourceById(id: string): IEventSourceGenericConfiguration | null;
    /** Get event sources as a sorted array */
    calculateEventSourcesAsSortedArray(): void;
    /** Add new event source */
    onAddEventSource(): void;
    /** Called to create a new event source based on type */
    onEventSourceCreate(id: string): void;
    /** Called when event source is added */
    onEventSourceAdded(config: IEventSourceGenericConfiguration): void;
    /** Open event source by id */
    onOpenEventSource(id: string): void;
    /** Called when event source is updated */
    onEventSourceUpdated(originalId: string, config: IEventSourceGenericConfiguration): void;
    /** Delete event source by id */
    onDeleteEventSource(id: string): void;
}

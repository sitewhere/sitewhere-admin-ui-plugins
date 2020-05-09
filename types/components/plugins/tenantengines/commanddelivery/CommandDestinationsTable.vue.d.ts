import Vue from "vue";
import { MicroserviceIcon } from "sitewhere-ide-common";
import NewCommandDestinationChooser from "./NewCommandDestinationChooser.vue";
import CoapCommandDestinationCreateDialog from "./coap/CoapCommandDestinationCreateDialog.vue";
import CoapCommandDestinationUpdateDialog from "./coap/CoapCommandDestinationUpdateDialog.vue";
import MqttCommandDestinationCreateDialog from "./mqtt/MqttCommandDestinationCreateDialog.vue";
import MqttCommandDestinationUpdateDialog from "./mqtt/MqttCommandDestinationUpdateDialog.vue";
import { ICommandDestinationGenericConfiguration } from "sitewhere-configuration-model";
export default class CommandDeliveryTable extends Vue {
    readonly tenantId: string;
    readonly commandDestinations: ICommandDestinationGenericConfiguration[];
    readonly chooser: NewCommandDestinationChooser;
    readonly coapCreate: CoapCommandDestinationCreateDialog;
    readonly coapUpdate: CoapCommandDestinationUpdateDialog;
    readonly mqttCreate: MqttCommandDestinationCreateDialog;
    readonly mqttUpdate: MqttCommandDestinationUpdateDialog;
    headers: {
        text: string;
        value: string;
    }[];
    /** Command destinations in format for display */
    commandDestsAsSortedArray: {
        meta: {
            id: string;
            type: string;
        };
        config: any;
    }[];
    onCommandDestinationsUpdated(): void;
    /** Get page icon */
    get icon(): MicroserviceIcon;
    /** Get list of ids already in use */
    findIdsInUse(exclude?: string): string[];
    /** Get command destination index based on id */
    getCommandDestinationIndex(id: string): number | null;
    /** Get a command destination by id */
    getCommandDestinationById(id: string): ICommandDestinationGenericConfiguration | null;
    /** Get command destinations as a sorted array */
    calculateCommandDestinationsAsSortedArray(): void;
    /** Add new command destination */
    onAddCommandDestination(): void;
    /** Called to create a new command destination based on type */
    onCommandDestinationCreate(id: string): void;
    /** Called when command destination is added */
    onCommandDestinationAdded(config: ICommandDestinationGenericConfiguration): void;
    /** Open command destination by id */
    onOpenCommandDestination(id: string): void;
    /** Called when command destination is updated */
    onCommandDestinationUpdated(originalId: string, config: ICommandDestinationGenericConfiguration): void;
    /** Delete command destination by id */
    onDeleteCommandDestination(id: string): void;
}

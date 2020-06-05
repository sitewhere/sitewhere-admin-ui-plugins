import Vue from "vue";
import { IRouterGenericConfiguration, ICommandDestinationGenericConfiguration } from "sitewhere-configuration-model";
import NewCommandRouterChooser from "./NewCommandRouterChooser.vue";
import DeviceTypeMappingRouterCreateDialog from "./routers/devicetypemapping/SettingsCreateDialog.vue";
export default class CommandRouterSection extends Vue {
    readonly router: IRouterGenericConfiguration;
    readonly destinations: ICommandDestinationGenericConfiguration[];
    readonly chooser: NewCommandRouterChooser;
    readonly dtmRouterCreate: DeviceTypeMappingRouterCreateDialog;
    /** Check for device type mapping router */
    get isDeviceTypeMappingRouter(): boolean;
    /** Send event to unset the router */
    onUnsetCommandRouter(): void;
    /** Open chooser for adding command router */
    onAddCommandRouter(): void;
    /** Show dialog for creating command router */
    onCommandRouterChosen(type: string): void;
    /** Indicate that updates were made to command router */
    onCommandRouterUpdate(): void;
}

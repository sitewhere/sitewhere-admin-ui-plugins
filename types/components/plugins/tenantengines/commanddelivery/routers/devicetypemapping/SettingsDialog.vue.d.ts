import { DialogComponent, BaseDialog } from "sitewhere-ide-components";
import { ICommandDestinationGenericConfiguration, IDeviceTypeMappingRouterConfiguration } from "sitewhere-configuration-model";
import SettingsFields from "./SettingsFields.vue";
export default class SettingsDialog extends DialogComponent<IDeviceTypeMappingRouterConfiguration> {
    readonly destinations: ICommandDestinationGenericConfiguration[];
    readonly title: string;
    readonly createLabel: string;
    readonly dialog: BaseDialog;
    readonly settings: SettingsFields;
    /** Generate payload from UI */
    generatePayload(): any;
    /** Reset dialog fields */
    reset(): void;
    /** Load dialog from a given configuration */
    load(config: IDeviceTypeMappingRouterConfiguration): void;
    /** Called after create button is clicked */
    onCreateClicked(e: any): void;
}

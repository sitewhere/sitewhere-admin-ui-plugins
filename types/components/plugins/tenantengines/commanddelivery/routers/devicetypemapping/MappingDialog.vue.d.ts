import { DialogComponent, BaseDialog } from "sitewhere-ide-components";
import { ICommandDestinationGenericConfiguration, IDeviceTypeMapping } from "sitewhere-configuration-model";
import { IDeviceType } from "sitewhere-rest-api";
import MappingFields from "./MappingFields.vue";
export default class SettingsDialog extends DialogComponent<IDeviceTypeMapping> {
    readonly destinations: ICommandDestinationGenericConfiguration[];
    readonly deviceTypes: IDeviceType[];
    readonly title: string;
    readonly createLabel: string;
    readonly dialog: BaseDialog;
    readonly mapping: MappingFields;
    /** Generate payload from UI */
    generatePayload(): any;
    /** Reset dialog fields */
    reset(): void;
    /** Load dialog from a given configuration */
    load(config: IDeviceTypeMapping): void;
    /** Called after create button is clicked */
    onCreateClicked(e: any): void;
}

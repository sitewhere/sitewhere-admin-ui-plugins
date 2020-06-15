import { NavigationIcon } from "sitewhere-ide-common";
import { DialogComponent, DialogSection, BaseDialog } from "sitewhere-ide-components";
import Warp10Fields from "./warp10/Warp10Fields.vue";
import InfluxDbFields from "./influxdb/InfluxDbFields.vue";
import NoFields from "./NoFields.vue";
import { IDatastoreDefinition, IDatastoreDefinitionLocal } from "sitewhere-configuration-model";
import { IInstanceConfiguration, ITimeSeriesConfigurationMap } from "sitewhere-rest-api";
export default class TsDatastoreDialog extends DialogComponent<IDatastoreDefinition> {
    readonly instance: IInstanceConfiguration;
    readonly title: string;
    readonly createLabel: string;
    readonly dialog: BaseDialog;
    readonly warp10: Warp10Fields;
    readonly influxdb: InfluxDbFields;
    readonly unknown: NoFields;
    scope: number;
    reference: string | null;
    type: string;
    configuration: any;
    /** List of supported database types */
    databaseTypes: {
        text: string;
        value: string;
    }[];
    /** Get displayed summary panel */
    get details(): DialogSection;
    onScopeChanged(): void;
    onReferenceChanged(): void;
    /** Get icon for dialog */
    get icon(): NavigationIcon;
    /** Indicates if local scope is chosen */
    get isLocalScope(): boolean;
    /** Indicates if global scope is chosen */
    get isGlobalScope(): boolean;
    /** Global time series configurations */
    get timeSeriesConfigurations(): ITimeSeriesConfigurationMap | null;
    /** Get list of available global time series databases */
    get globalDatabases(): {
        text: string;
        value: string;
    }[];
    /** Find a referenced persistence configuration */
    findGlobalDefinition(reference: string): IDatastoreDefinitionLocal | null;
    /** Local or global datastore type */
    getDatastoreType(): string | null;
    /** Local or global datastore configuration */
    getDatastoreConfiguration(): any;
    /** Indicates whether database is Warp 10 */
    get isWarp10(): boolean;
    /** Indicates whether database is InfluxDB */
    get isInfluxDB(): boolean;
    /** Indicates if database type is unknown */
    get isUnknown(): boolean;
    /** Generate configuration from detail panel */
    generateConfiguration(): any;
    /** Generate payload from UI data */
    generatePayload(): IDatastoreDefinition;
    /** Reset dialog content to default */
    reset(): void;
    /** Load data from an existing configuration */
    load(payload: IDatastoreDefinition): void;
    /** Reload details panel based on updated configuration */
    reloadDetails(): void;
    /** Called after create button is clicked */
    onCreateClicked(e: any): void;
}

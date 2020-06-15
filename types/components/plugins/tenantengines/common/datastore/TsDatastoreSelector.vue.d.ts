import Vue from "vue";
import { IDatastoreDefinition, IDatastoreDefinitionLocal } from "sitewhere-configuration-model";
import { IInstanceConfiguration, ITimeSeriesConfigurationMap } from "sitewhere-rest-api";
import TsDatastoreCreateDialog from "./TsDatastoreCreateDialog.vue";
import TsDatastoreUpdateDialog from "./TsDatastoreUpdateDialog.vue";
import Warp10Summary from "./warp10/Warp10Summary.vue";
import InfluxDbSummary from "./influxdb/InfluxDbSummary.vue";
import NoSummary from "./NoSummary.vue";
export default class TsDatastoreSelector extends Vue {
    readonly datastore: IDatastoreDefinition;
    readonly instance: IInstanceConfiguration;
    readonly create: TsDatastoreCreateDialog;
    readonly update: TsDatastoreUpdateDialog;
    readonly warp10: Warp10Summary;
    readonly influxdb: InfluxDbSummary;
    readonly unknown: NoSummary;
    /** Get displayed summary panel */
    get summary(): Vue;
    /** Global time series configurations */
    get timeSeriesConfigurations(): ITimeSeriesConfigurationMap | null;
    /** Get reference name */
    get datastoreReference(): string | null;
    /** Local or global datastore type */
    get datastoreType(): string | null;
    /** Local or global datastore configuration */
    get configuration(): any;
    /** Warp 10 datastore */
    get isWarp10(): boolean;
    /** InfluxDB datastore */
    get isInfluxDB(): boolean;
    /** Unknown datastore */
    get isUnknown(): boolean;
    /** Find a referenced persistence configuration */
    findGlobalDefinition(reference: string): IDatastoreDefinitionLocal | null;
    /** Add datastore */
    onAddDatastore(): void;
    /** Called to create datastore based on UI data */
    onDatastoreCreate(definition: IDatastoreDefinition): void;
    /** Update datastore */
    onUpdateDatastore(): void;
    /** Called to update datastore based on UI data */
    onDatastoreUpdate(definition: IDatastoreDefinition): void;
    /** Unset datastore */
    onUnsetDatastore(): void;
}

import Vue from "vue";
import { IDatastoreDefinition, IDatastoreDefinitionLocal } from "sitewhere-configuration-model";
import { IInstanceConfiguration, IRdbConfigurationMap } from "sitewhere-rest-api";
import DatastoreCreateDialog from "./datastore/DatastoreCreateDialog.vue";
import DatastoreUpdateDialog from "./datastore/DatastoreUpdateDialog.vue";
export default class DatastoreSelector extends Vue {
    readonly datastore: IDatastoreDefinition;
    readonly instance: IInstanceConfiguration;
    readonly create: DatastoreCreateDialog;
    readonly update: DatastoreUpdateDialog;
    /** Global RDB configurations */
    get rdbConfigurations(): IRdbConfigurationMap | null;
    /** Get reference name */
    get datastoreReference(): string | null;
    /** Local or global datastore type */
    get datastoreType(): string | null;
    /** Local or global datastore configuration */
    get configuration(): any;
    /** Postgres95 datastore */
    get isPostgres95(): boolean;
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

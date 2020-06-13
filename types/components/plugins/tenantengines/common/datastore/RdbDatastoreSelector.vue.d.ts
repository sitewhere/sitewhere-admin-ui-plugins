import Vue from "vue";
import { IDatastoreDefinition, IDatastoreDefinitionLocal } from "sitewhere-configuration-model";
import { IInstanceConfiguration, IRdbConfigurationMap } from "sitewhere-rest-api";
import RdbDatastoreCreateDialog from "./RdbDatastoreCreateDialog.vue";
import RdbDatastoreUpdateDialog from "./RdbDatastoreUpdateDialog.vue";
export default class RdbDatastoreSelector extends Vue {
    readonly datastore: IDatastoreDefinition;
    readonly instance: IInstanceConfiguration;
    readonly create: RdbDatastoreCreateDialog;
    readonly update: RdbDatastoreUpdateDialog;
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

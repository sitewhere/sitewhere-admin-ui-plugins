import Vue from "vue";
import { ITenantEngineConfiguration, IInstanceConfiguration } from "sitewhere-rest-api";
import { IEventManagementConfiguration, IDatastoreDefinition } from "sitewhere-configuration-model";
export default class EventManagementPlugin extends Vue {
    readonly configuration: ITenantEngineConfiguration;
    /** Get tenant configuration for event management */
    get eventManagement(): IEventManagementConfiguration;
    /** Get instance configuraton information */
    get instanceManagement(): IInstanceConfiguration | null;
    /** Get datastore definition */
    get datastore(): IDatastoreDefinition | null;
    /** Create new datastore */
    onCreateDatastore(definition: IDatastoreDefinition): void;
    /** Update datastore */
    onUpdateDatastore(definition: IDatastoreDefinition): void;
    /** Unset the datastore */
    onUnsetDatastore(): void;
    /** Mark data as having been updated */
    markDirty(): void;
}

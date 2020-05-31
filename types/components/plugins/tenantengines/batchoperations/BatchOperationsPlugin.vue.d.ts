import Vue from "vue";
import { ITenantEngineConfiguration, IInstanceConfiguration } from "sitewhere-rest-api";
import { IBatchOperationsConfiguration, IBatchOperationManagerConfiguration, IDatastoreDefinition } from "sitewhere-configuration-model";
export default class BatchOperationsPlugin extends Vue {
    readonly configuration: ITenantEngineConfiguration;
    /** Get tenant configuration for batch operations */
    get batchOperations(): IBatchOperationsConfiguration;
    /** Get instance configuraton information */
    get instanceManagement(): IInstanceConfiguration | null;
    /** Get datastore definition */
    get datastore(): IDatastoreDefinition | null;
    /** Get batch operation manager configuration */
    get batchOperationManager(): IBatchOperationManagerConfiguration | null;
    /** Create new datastore */
    onCreateDatastore(definition: IDatastoreDefinition): void;
    /** Update datastore */
    onUpdateDatastore(definition: IDatastoreDefinition): void;
    /** Unset the datastore */
    onUnsetDatastore(): void;
    /** Handle batch operation manager updates */
    onBatchOperationManagerUpdate(updated: IBatchOperationManagerConfiguration): void;
}

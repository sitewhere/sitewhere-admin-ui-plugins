import Vue from "vue";
import { ITenantEngineConfiguration } from "sitewhere-rest-api";
import { IAssetManagementConfiguration, IDatastoreDefinition } from "sitewhere-configuration-model";
import { IInstanceConfiguration } from "sitewhere-rest-api";
export default class AssetManagementPlugin extends Vue {
    readonly configuration: ITenantEngineConfiguration;
    /** Get tenant configuration for asset management */
    get assetManagement(): IAssetManagementConfiguration;
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
}

import { NavigationIcon } from "sitewhere-ide-common";
import { DialogComponent, DialogSection, BaseDialog } from "sitewhere-ide-components";
import Postgres95Fields from "./postgres95/Postgres95Fields.vue";
import { IDatastoreDefinition, IDatastoreDefinitionLocal } from "sitewhere-configuration-model";
import { IInstanceConfiguration, IRdbConfigurationMap } from "sitewhere-rest-api";
export default class DatastoreDialog extends DialogComponent<IDatastoreDefinition> {
    readonly instance: IInstanceConfiguration;
    readonly title: string;
    readonly createLabel: string;
    readonly dialog: BaseDialog;
    readonly details: Postgres95Fields;
    scope: number;
    reference: string | null;
    type: string;
    configuration: any;
    /** List of supported database types */
    databaseTypes: {
        text: string;
        value: string;
    }[];
    /** Convert to dialog */
    get dialogComponent(): BaseDialog;
    /** Convert to dialog section */
    get detailsSection(): DialogSection;
    onScopeChanged(): void;
    onReferenceChanged(): void;
    /** Get icon for dialog */
    get icon(): NavigationIcon;
    /** Indicates if local scope is chosen */
    get isLocalScope(): boolean;
    /** Indicates if global scope is chosen */
    get isGlobalScope(): boolean;
    /** Global RDB configurations */
    get rdbConfigurations(): IRdbConfigurationMap | null;
    /** Get list of available global databases */
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
    /** Indicates whether database is Postgres95 */
    get isPostgres95(): boolean;
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

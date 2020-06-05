import Vue from "vue";
import { MicroserviceIcon } from "sitewhere-ide-common";
import { ITenantEngineConfiguration, IInstanceConfiguration } from "sitewhere-rest-api";
import { ICommandDeliveryConfiguration, ICommandDestinationGenericConfiguration, IRouterGenericConfiguration } from "sitewhere-configuration-model";
export default class CommandDeliveryPlugin extends Vue {
    readonly configuration: ITenantEngineConfiguration;
    /** Get page icon */
    get icon(): MicroserviceIcon;
    /** Tenant id */
    get tenantId(): string | null;
    /** Get tenant configuration for command delivery */
    get commandDeliveryConfiguration(): ICommandDeliveryConfiguration;
    /** Get instance configuraton information */
    get instanceManagement(): IInstanceConfiguration | null;
    /** Get command destinations list */
    get destinations(): ICommandDestinationGenericConfiguration[] | null;
    /** Get configured router */
    get router(): IRouterGenericConfiguration | null;
    /** Handle command destination created */
    onCommandDestinationCreated(config: ICommandDestinationGenericConfiguration): void;
    /** Handle command destination updated */
    onCommandDestinationUpdated(originalId: string, config: ICommandDestinationGenericConfiguration): void;
    /** Handle command destination deleted */
    onCommandDestinationDeleted(id: string): void;
    /** Handle command router updated */
    onCommandRouterUpdated(): void;
    /** Handle unsetting router */
    onUnsetCommandRouter(): void;
    /** Mark data as having been updated */
    markDirty(): void;
}

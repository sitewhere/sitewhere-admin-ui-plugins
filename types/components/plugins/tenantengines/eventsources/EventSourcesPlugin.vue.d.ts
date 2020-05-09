import Vue from "vue";
import { MicroserviceIcon } from "sitewhere-ide-common";
import { ITenantEngineConfiguration } from "sitewhere-rest-api";
import { IEventSourcesConfiguration, IEventSourceGenericConfiguration } from "sitewhere-configuration-model";
import { IInstanceConfiguration } from "sitewhere-rest-api";
export default class EventSourcesPlugin extends Vue {
    readonly configuration: ITenantEngineConfiguration;
    /** Get page icon */
    get icon(): MicroserviceIcon;
    /** Tenant id */
    get tenantId(): string | null;
    /** Get tenant configuration for event sources */
    get eventSourcesConfiguration(): IEventSourcesConfiguration;
    /** Get instance configuraton information */
    get instanceManagement(): IInstanceConfiguration | null;
    /** Get event sources list */
    get eventSources(): IEventSourceGenericConfiguration[] | null;
    /** Handle event source created */
    onEventSourceCreated(config: IEventSourceGenericConfiguration): void;
    /** Handle event source updated */
    onEventSourceUpdated(originalId: string, config: IEventSourceGenericConfiguration): void;
    /** Handle event source deleted */
    onEventSourceDeleted(id: string): void;
    /** Mark data as having been updated */
    markDirty(): void;
}

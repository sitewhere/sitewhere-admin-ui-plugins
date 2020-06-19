import Vue from "vue";
import { MicroserviceIcon } from "sitewhere-ide-common";
import { ITenantEngineConfiguration } from "sitewhere-rest-api";
import { IOutboundConnectorsConfiguration, IOutboundConnectorGenericConfiguration } from "sitewhere-configuration-model";
import { IInstanceConfiguration } from "sitewhere-rest-api";
export default class OutboundConnectorsPlugin extends Vue {
    readonly configuration: ITenantEngineConfiguration;
    /** Get page icon */
    get icon(): MicroserviceIcon;
    /** Tenant id */
    get tenantId(): string | null;
    /** Get tenant configuration for outbound connectors */
    get connectorsConfiguration(): IOutboundConnectorsConfiguration;
    /** Get instance configuraton information */
    get instanceManagement(): IInstanceConfiguration | null;
    /** Get outbound connectors list */
    get outboundConnectors(): IOutboundConnectorGenericConfiguration[] | null;
    /** Handle outbound connector created */
    onOutboundConnectorCreated(config: IOutboundConnectorGenericConfiguration): void;
    /** Handle outbound connector updated */
    onOutboundConnectorUpdated(originalId: string, config: IOutboundConnectorGenericConfiguration): void;
    /** Handle event source deleted */
    onOutboundConnectorDeleted(id: string): void;
    /** Mark data as having been updated */
    markDirty(): void;
}

import Vue from "vue";
import { ITenantEngineConfiguration } from "sitewhere-rest-api";
import { IInboundProcessingConfiguration } from "sitewhere-configuration-model";
export default class InboundProcessingPlugin extends Vue {
    readonly configuration: ITenantEngineConfiguration;
    processingThreadCount: number;
    /** Get tenant configuration for inbound processing */
    get inboundProcessing(): IInboundProcessingConfiguration;
    onConfigurationUpdated(updated: IInboundProcessingConfiguration): void;
    onProcessingThreadCountUpdated(updated: number): void;
    /** Mark data as having been updated */
    markDirty(): void;
}

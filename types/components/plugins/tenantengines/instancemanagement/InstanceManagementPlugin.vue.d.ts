import Vue from "vue";
import { ITenantEngineConfiguration } from "sitewhere-rest-api";
import { IInstanceManagementConfiguration } from "sitewhere-configuration-model";
export default class InstanceManagementPlugin extends Vue {
    readonly configuration: ITenantEngineConfiguration;
    /** Tenant id */
    get tenantId(): string | null;
    /** Get tenant configuration for instance management */
    get instanceManagementConfiguration(): IInstanceManagementConfiguration;
    /** Get label generators list */
    get eventPipelineHistoryLength(): number | null;
    set eventPipelineHistoryLength(value: number | null);
    /** Mark data as having been updated */
    markDirty(): void;
}

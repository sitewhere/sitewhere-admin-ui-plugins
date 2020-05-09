import Vue from "vue";
import { ITenantEngineConfiguration, IMicroserviceSummary, ITenant } from "sitewhere-rest-api";
export default class TenantEnginePlugin extends Vue {
    readonly configuration: ITenantEngineConfiguration;
    /** Get microservice information */
    get tenant(): ITenant | null;
    /** Get microservice information */
    get microservice(): IMicroserviceSummary | null;
    /** Get header displayed at top of page */
    get header(): string | null;
}

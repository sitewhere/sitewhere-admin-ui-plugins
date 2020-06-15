import Vue from "vue";
import { IInfluxDBConfiguration } from "sitewhere-configuration-model";
export default class InfluxDbSummary extends Vue {
    readonly configuration: IInfluxDBConfiguration;
    /** Hostname */
    get hostname(): string | null;
    /** Port */
    get port(): number | null;
    /** Application */
    get databaseName(): string | null;
}

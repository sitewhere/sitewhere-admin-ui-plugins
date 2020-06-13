import Vue from "vue";
import { IPostgres95Configuration } from "sitewhere-configuration-model";
export default class Postgres95Summary extends Vue {
    readonly configuration: IPostgres95Configuration;
    /** Hostname */
    get hostname(): string | null;
    /** Port */
    get port(): number | null;
    /** Username */
    get username(): string | null;
    /** Password */
    get password(): string | null;
    /** Max connections */
    get maxConnections(): number | null;
}

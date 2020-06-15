import Vue from "vue";
import { IWarp10Configuration } from "sitewhere-configuration-model";
export default class Warp10Summary extends Vue {
    readonly configuration: IWarp10Configuration;
    /** Hostname */
    get hostname(): string | null;
    /** Port */
    get port(): number | null;
    /** Application */
    get application(): string | null;
    /** Token secret */
    get tokenSecret(): string | null;
}

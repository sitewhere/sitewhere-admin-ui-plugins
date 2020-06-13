import { DialogSection } from "sitewhere-ide-components";
import { Validation } from "vuelidate";
export default class Warp10Fields extends DialogSection {
    dummy: Validation;
    readonly readonly: boolean;
    hostname: string | null;
    port: number | null;
    application: string | null;
    tokenSecret: string | null;
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(configuration: any): void;
    /** Save form data to an object */
    save(): {};
}

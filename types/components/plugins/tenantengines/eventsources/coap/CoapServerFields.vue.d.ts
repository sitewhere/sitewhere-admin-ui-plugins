import { DialogSection } from "sitewhere-ide-components";
import { ICoapServerConfiguration } from "sitewhere-configuration-model";
export default class CoapServerFields extends DialogSection {
    port: number;
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(input: ICoapServerConfiguration): void;
    /** Save form data to an object */
    save(): {};
}

import { DialogSection } from "sitewhere-ide-components";
import { ICoapCommandDestinationConfiguration } from "sitewhere-configuration-model";
export default class CoapFields extends DialogSection {
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(input: ICoapCommandDestinationConfiguration): void;
    /** Save form data to an object */
    save(): {};
}

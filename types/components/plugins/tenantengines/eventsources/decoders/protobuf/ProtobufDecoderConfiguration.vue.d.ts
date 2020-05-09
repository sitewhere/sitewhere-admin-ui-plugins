import { DialogSection } from "sitewhere-ide-components";
export default class ProtobufDecoderConfiguration extends DialogSection {
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(input: any): void;
    /** Save form data to an object */
    save(): {};
}

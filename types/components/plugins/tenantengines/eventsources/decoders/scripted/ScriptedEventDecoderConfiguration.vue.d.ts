import { DialogSection } from "sitewhere-ide-components";
import ScriptedEventDecoderFields from "./ScriptedEventDecoderFields.vue";
export default class ScriptedEventDecoderConfiguration extends DialogSection {
    readonly tenantId: string;
    readonly script: ScriptedEventDecoderFields;
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(input: any): void;
    /** Save form data to an object */
    save(): {};
}

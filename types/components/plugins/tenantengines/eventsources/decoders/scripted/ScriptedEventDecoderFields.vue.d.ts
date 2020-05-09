import { DialogSection, ScriptChooser } from "sitewhere-ide-components";
import { IScriptedEventDecoderConfiguration } from "sitewhere-configuration-model";
export default class ScriptedDecoderFields extends DialogSection {
    readonly tenantId: string;
    readonly chooser: ScriptChooser;
    scriptId: string | null;
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(input: IScriptedEventDecoderConfiguration): void;
    /** Save form data to an object */
    save(): IScriptedEventDecoderConfiguration;
}

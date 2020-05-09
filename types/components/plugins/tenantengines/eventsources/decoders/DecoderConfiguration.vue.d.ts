import { DialogSection } from "sitewhere-ide-components";
import { IEventDecoderGenericConfiguration } from "sitewhere-configuration-model";
export default class DecoderConfiguration extends DialogSection {
    readonly tenantId: string;
    readonly decoder: IEventDecoderGenericConfiguration;
    readonly details: DialogSection;
    onDecoderTypeUpdated(): void;
    /** Decoder type */
    get decoderType(): string | null;
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(input: IEventDecoderGenericConfiguration): void;
    /** Save form data to an object */
    save(): {};
}

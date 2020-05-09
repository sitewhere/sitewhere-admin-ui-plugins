import { DialogComponent, BaseDialog } from "sitewhere-ide-components";
import DecoderConfiguration from "./decoders/DecoderConfiguration.vue";
import { IEventSourceGenericConfiguration, IEventDecoderGenericConfiguration } from "sitewhere-configuration-model";
export default class EventSourceDialog extends DialogComponent<IEventSourceGenericConfiguration> {
    readonly tenantId: string;
    readonly type: string;
    readonly icon: string;
    readonly title: string;
    readonly width: number;
    readonly cancelLabel: string;
    readonly createLabel: string;
    readonly visible: boolean;
    readonly idsInUse: string[];
    readonly dialog: BaseDialog;
    readonly decoderConfiguration: DecoderConfiguration;
    defaultDecoder: {
        type: string;
        configuration: {};
    };
    id: string | null;
    decoder: IEventDecoderGenericConfiguration;
    /** Decoder type */
    get decoderType(): string | null;
    /** Blank configuration if type updated */
    set decoderType(value: string | null);
    /** List of decoder types */
    decoderTypes: {
        text: string;
        value: string;
    }[];
    /** Save dialog fields */
    save(): any;
    /** Reset the dialog */
    reset(): void;
    /** Validate fields */
    validate(): boolean;
    /** Load dialog from a given configuration */
    load(config: IEventSourceGenericConfiguration): void;
    /** Set the active tab */
    setActiveTab(tab: number): void;
    /** Called after create button is clicked */
    onCreateClicked(e: any): void;
    /** Called after cancel button is clicked */
    onCancelClicked(e: any): void;
}

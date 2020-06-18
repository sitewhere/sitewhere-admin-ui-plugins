import { DialogSection } from "sitewhere-ide-components";
import { IQrCodeGeneratorConfiguration } from "sitewhere-configuration-model";
export default class QrCodeGeneratorFields extends DialogSection {
    width: number;
    height: number;
    foregroundColor: string;
    backgroundColor: string;
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(input: IQrCodeGeneratorConfiguration): void;
    /** Save form data to an object */
    save(): {};
}

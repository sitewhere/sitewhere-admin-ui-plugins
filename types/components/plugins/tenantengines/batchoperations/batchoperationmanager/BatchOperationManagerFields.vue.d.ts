import { IBatchOperationManagerConfiguration } from "sitewhere-configuration-model";
import { DialogSection } from "sitewhere-ide-components";
export default class BatchOperationManagerFields extends DialogSection {
    throttleDelayMs: number;
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(input: IBatchOperationManagerConfiguration): void;
    /** Save form data to an object */
    save(): IBatchOperationManagerConfiguration;
}

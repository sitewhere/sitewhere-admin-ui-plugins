import { DialogSection } from "sitewhere-ide-components";
import { IInfluxDBConfiguration } from "sitewhere-configuration-model";
export default class InfluxDbFields extends DialogSection {
    readonly readonly: boolean;
    hostname: string | null;
    port: number | null;
    databaseName: string | null;
    /** Reset section content */
    reset(): void;
    /** Perform validation */
    validate(): boolean;
    /** Load form data from an object */
    load(configuration: IInfluxDBConfiguration): void;
    /** Save form data to an object */
    save(): {};
}

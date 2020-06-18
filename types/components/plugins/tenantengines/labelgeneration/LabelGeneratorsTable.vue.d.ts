import Vue from "vue";
import { MicroserviceIcon } from "sitewhere-ide-common";
import NewLabelGeneratorChooser from "./NewLabelGeneratorChooser.vue";
import QrCodeLabelGeneratorCreateDialog from "./generators/qrcode/QrCodeLabelGeneratorCreateDialog.vue";
import QrCodeLabelGeneratorUpdateDialog from "./generators/qrcode/QrCodeLabelGeneratorUpdateDialog.vue";
import { ILabelGeneratorGenericConfiguration } from "sitewhere-configuration-model";
/** Format for displaying data */
interface IDisplayedGenerator {
    meta: {
        id: string;
        type: string;
    };
    config: any;
}
export default class LabelGeneratorTable extends Vue {
    readonly tenantId: string;
    readonly generators: ILabelGeneratorGenericConfiguration[];
    readonly chooser: NewLabelGeneratorChooser;
    readonly qrcodeCreate: QrCodeLabelGeneratorCreateDialog;
    readonly qrcodeUpdate: QrCodeLabelGeneratorUpdateDialog;
    headers: {
        text: string;
        value: string;
    }[];
    /** Get page icon */
    get icon(): MicroserviceIcon;
    /** Get list of ids already in use */
    findIdsInUse(exclude?: string): string[];
    /** Get label generator index based on id */
    getLabelGeneratorIndex(id: string): number | null;
    /** Get a label generator by id */
    getLabelGeneratorById(id: string): ILabelGeneratorGenericConfiguration | null;
    /** Get label generators as a sorted array */
    get displayLabelGenerators(): IDisplayedGenerator[];
    /** Add new label generator */
    onAddLabelGenerator(): void;
    /** Called to create a new label generator based on type */
    onLabelGeneratorCreate(id: string): void;
    /** Called when label generator is added */
    onLabelGeneratorAdded(config: ILabelGeneratorGenericConfiguration): void;
    /** Open label generator by id */
    onOpenLabelGenerator(id: string): void;
    /** Called when label generator is updated */
    onLabelGeneratorUpdated(originalId: string, config: ILabelGeneratorGenericConfiguration): void;
    /** Delete label generator by id */
    onDeleteLabelGenerator(id: string): void;
}
export {};

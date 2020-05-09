import Vue from "vue";
import { MicroserviceIcon } from "sitewhere-ide-common";
import { NewElementChooser } from "sitewhere-ide-components";
export default class NewCommandDestinationChooser extends Vue {
    readonly dialog: NewElementChooser;
    /** Get page icon */
    get icon(): MicroserviceIcon;
    /** Open chooser */
    openChooser(): void;
    /** Close chooser */
    closeChooser(): void;
    /** Close chooser on item click */
    onChosen(id: string): void;
}

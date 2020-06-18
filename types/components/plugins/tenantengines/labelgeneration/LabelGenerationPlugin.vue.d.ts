import Vue from "vue";
import { ITenantEngineConfiguration } from "sitewhere-rest-api";
import { ILabelGenerationConfiguration, ILabelGeneratorGenericConfiguration } from "sitewhere-configuration-model";
export default class LabelGenerationPlugin extends Vue {
    readonly configuration: ITenantEngineConfiguration;
    /** Tenant id */
    get tenantId(): string | null;
    /** Get tenant configuration for label generation */
    get labelGenerationConfiguration(): ILabelGenerationConfiguration;
    /** Get label generators list */
    get labelGenerators(): ILabelGeneratorGenericConfiguration[] | null;
    /** Handle label generator created */
    onLabelGeneratorCreated(config: ILabelGeneratorGenericConfiguration): void;
    /** Handle label generator updated */
    onLabelGeneratorUpdated(originalId: string, config: ILabelGeneratorGenericConfiguration): void;
    /** Handle label generator deleted */
    onLabelGeneratorDeleted(id: string): void;
    /** Mark data as having been updated */
    markDirty(): void;
}

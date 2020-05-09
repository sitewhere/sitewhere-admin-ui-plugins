import { VueConstructor } from "vue";
import DatastoreSelector from "./components/plugins/tenantengines/common/DatastoreSelector.vue";
import TenantEnginePlugin from "./components/plugins/tenantengines/TenantEnginePlugin.vue";
import AssetManagementPlugin from "./components/plugins/tenantengines/assetmanagement/AssetManagementPlugin.vue";
import BatchOperationsPlugin from "./components/plugins/tenantengines/batchoperations/BatchOperationsPlugin.vue";
import CommandDeliveryPlugin from "./components/plugins/tenantengines/commanddelivery/CommandDeliveryPlugin.vue";
import DeviceManagementPlugin from "./components/plugins/tenantengines/devicemanagement/DeviceManagementPlugin.vue";
import EventSourcesPlugin from "./components/plugins/tenantengines/eventsources/EventSourcesPlugin.vue";
export interface Options {
}
export declare function SiteWhereAdminUiPlugins<Options>(Vue: VueConstructor, options: Options): void;
/** Common */
export { DatastoreSelector, TenantEnginePlugin };
/** Plugins */
export { AssetManagementPlugin, BatchOperationsPlugin, CommandDeliveryPlugin, DeviceManagementPlugin, EventSourcesPlugin };

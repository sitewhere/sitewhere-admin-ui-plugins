import { VueConstructor } from "vue";

import { SiteWhereIdeComponents } from "sitewhere-ide-components";

import DatastoreSelector from "./components/plugins/tenantengines/common/DatastoreSelector.vue";
import TenantEnginePlugin from "./components/plugins/tenantengines/TenantEnginePlugin.vue";

import AssetManagementPlugin from "./components/plugins/tenantengines/assetmanagement/AssetManagementPlugin.vue";
import BatchOperationsPlugin from "./components/plugins/tenantengines/batchoperations/BatchOperationsPlugin.vue";
import CommandDeliveryPlugin from "./components/plugins/tenantengines/commanddelivery/CommandDeliveryPlugin.vue";
import DeviceManagementPlugin from "./components/plugins/tenantengines/devicemanagement/DeviceManagementPlugin.vue";
import EventSourcesPlugin from "./components/plugins/tenantengines/eventsources/EventSourcesPlugin.vue";

/* eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-empty-interface */
export interface Options {
}

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export function SiteWhereAdminUiPlugins<Options>(Vue: VueConstructor, options: Options): void {
    Vue.use(SiteWhereIdeComponents);

    Vue.component("sw-datastore-selector", DatastoreSelector);
    Vue.component("sw-tenant-engine-plugin", TenantEnginePlugin);

    Vue.component("sw-asset-management-config-plugin", AssetManagementPlugin);
    Vue.component("sw-batch-operations-config-plugin", BatchOperationsPlugin);
    Vue.component("sw-command-delivery-config-plugin", CommandDeliveryPlugin);
    Vue.component("sw-device-management-config-plugin", DeviceManagementPlugin);
    Vue.component("sw-event-sources-config-plugin", EventSourcesPlugin);
}

/** Common */
export {
    DatastoreSelector,
    TenantEnginePlugin
}

/** Plugins */
export {
    AssetManagementPlugin,
    BatchOperationsPlugin,
    CommandDeliveryPlugin,
    DeviceManagementPlugin,
    EventSourcesPlugin
}

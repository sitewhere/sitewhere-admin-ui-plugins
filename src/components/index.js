import DatastoreSelector from "./plugins/tenantengines/common/DatastoreSelector.vue";
import TenantEnginePlugin from "./plugins/tenantengines/TenantEnginePlugin.vue";

import AssetManagementPlugin from "./plugins/tenantengines/assetmanagement/AssetManagementPlugin.vue";
import BatchOperationsPlugin from "./plugins/tenantengines/batchoperations/BatchOperationsPlugin.vue";
import CommandDeliveryPlugin from "./plugins/tenantengines/commanddelivery/CommandDeliveryPlugin.vue";
import DeviceManagementPlugin from "./plugins/tenantengines/devicemanagement/DeviceManagementPlugin.vue";
import EventSourcesPlugin from "./plugins/tenantengines/eventsources/EventSourcesPlugin.vue";

// Process as Vue plugin.
function AdminUiPlugins(Vue) {
  Vue.component("sw-datastore-selector", DatastoreSelector);
  Vue.component("sw-tenant-engine-plugin", TenantEnginePlugin);

  Vue.component("sw-asset-management-config-plugin", AssetManagementPlugin);
  Vue.component("sw-batch-operations-config-plugin", BatchOperationsPlugin);
  Vue.component("sw-command-delivery-config-plugin", CommandDeliveryPlugin);
  Vue.component("sw-device-management-config-plugin", DeviceManagementPlugin);
  Vue.component("sw-event-sources-config-plugin", EventSourcesPlugin);
}

export default AdminUiPlugins;

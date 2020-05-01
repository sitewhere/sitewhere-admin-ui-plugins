<template>
  <device-type-mapping-router-dialog
    ref="dialog"
    title="Create Device Type Mapping Router"
    createLabel="Create"
    @payload="onPayload"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Ref } from "vue-property-decorator";

import DeviceTypeMappingRouterDialog from "./DeviceTypeMappingRouterDialog.vue";

import { IDeviceTypeMappingRouterConfiguration } from "sitewhere-configuration-model";

@Component({
  components: {
    DeviceTypeMappingRouterDialog
  }
})
export default class DeviceTypeMappingRouterCreateDialog extends Vue {
  @Ref() readonly dialog!: DeviceTypeMappingRouterDialog;

  idsInUse: string[] = [];

  /** Emit payload */
  onPayload(payload: IDeviceTypeMappingRouterConfiguration): void {
    (this.dialog as any).closeDialog();
    this.$emit("create", payload);
  }

  /** Open dialog */
  openDialog(): void {
    (this.dialog as any).reset();
    (this.dialog as any).openDialog();
  }
}
</script>

<style scoped></style>

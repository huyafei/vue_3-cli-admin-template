<template>
  <!-- 如果有 elSvgIcon 显示 elSvgIcon 没有显示 icon-->
  <el-icon v-if="meta?.elSvgIcon" class="sub-el-icon" style="width: 18px">
    <component v-if="meta?.elSvgIcon" :is="ElSvg[meta.elSvgIcon]" />
  </el-icon>
  <svg-icon v-else-if="meta?.icon" :icon-class="meta?.icon" />
</template>

<script setup>
import * as ElSvg from "@element-plus/icons-vue";
defineProps({
  meta: { type: Object, default: null },
});
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
  //position: relative;
  //right: 3px;
  //font-size: var(--sidebar-el-icon-size);
  //text-align: left !important;
}
</style>

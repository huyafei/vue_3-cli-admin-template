<script>
export default {
  name: "SvgIcon",
};
</script>
<script setup>
import { computed, defineProps, toRefs } from "vue";
import { isExternal } from "@/utils/validate";

const props = defineProps({
  iconClass: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: "",
  },
});
const { iconClass, className } = toRefs(props);
const _isExternal = computed(() => isExternal(iconClass.value));
const iconName = computed(() => `#icon-${iconClass.value}`);
const svgClass = computed(() => {
  if (className.value) {
    return "svg-icon " + className.value;
  } else {
    return "svg-icon";
  }
});
const styleExternalIcon = computed(() => {
  return {
    mask: `url(${iconClass.value}) no-repeat 50% 50%`,
    "-webkit-mask": `url(${iconClass.value}) no-repeat 50% 50%`,
  };
});
</script>
<template>
  <div
    v-if="_isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
  />
  <svg v-else :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>
<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>

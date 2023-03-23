<template>
  <el-config-provider :locale="lang[language]" namespace="el" :size="size">
    <router-view />
  </el-config-provider>
</template>
<script>
import { reactive, onBeforeMount, onMounted, computed } from "vue";
import { useStore } from "vuex";
import zh from "element-plus/lib/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";

export default {
  setup() {
    const store = useStore();
    const lang = reactive({
      zh,
      en,
    });
    const language = computed(() => {
      return store.getters.language;
    });
    const size = computed(() => {
      console.log(store.getters.size);
      return store.getters.size;
    });
    return { lang, language, size };
  },
};
</script>
<style lang="scss"></style>

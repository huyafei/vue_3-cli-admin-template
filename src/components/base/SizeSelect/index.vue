<template>
  <el-dropdown trigger="click" @command="handleSetSize" class="sizes">
    <div>
      <svg-icon class-name="size-icon" icon-class="size" />
    </div>
    <template v-slot:dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item of sizeOptions"
          :key="item.value"
          :disabled="size === item.value"
          :command="item.value"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
export default {
  data() {
    return {
      sizeOptions: [
        { label: "Default", value: "default" },
        { label: "Large", value: "large" },
        { label: "Small", value: "small" },
      ],
    };
  },
  computed: {
    size() {
      return this.$store.getters.size;
    },
  },
  methods: {
    handleSetSize(size) {
      this.$store.dispatch("app/setSize", size);
      // this.refreshView();
      this.$message({
        message: "Switch Size Success",
        type: "success",
      });
    },
    refreshView() {
      // In order to make the cached page re-rendered
      this.$store.dispatch("tagsView/delAllCachedViews", this.$route);

      const { fullPath } = this.$route;

      this.$nextTick(() => {
        this.$router.replace({
          path: "/redirect" + fullPath,
        });
      });
    },
  },
};
</script>
<style scoped lang="scss">
.sizes {
  line-height: inherit;
}
</style>

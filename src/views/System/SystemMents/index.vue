<!-- 系统参数 -->
<template>
  <div>系统参数</div>
</template>

<script>

export default {
  activated() {
    this.$store.commit('BreadCrumbUpdate', [
      {
        path: '/index',
        name: '首页',
      },
      {
        path: '/System',
        name: '系统管理',
        noLink: true,
      },
      {
        path: '/System/SystemMents',
        name: '系统参数',
        noLink: true,
      },
    ]);
  },
  created() {},
  mounted() {},
  computed: {},
  components: {},
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>

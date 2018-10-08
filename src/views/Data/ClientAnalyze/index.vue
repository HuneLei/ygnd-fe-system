<!-- 客户分析 -->
<template>
  <div>客户分析</div>
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
        path: '/Data',
        name: '报表数据管理',
        noLink: true,
      },
      {
        path: '/Data/ClientAnalyze',
        name: '客户分析',
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

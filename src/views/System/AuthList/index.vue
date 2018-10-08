<!-- 权限清单 -->
<template>
  <div>权限清单</div>
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
        path: '/System/AuthList',
        name: '权限清单',
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

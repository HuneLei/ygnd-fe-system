<!-- 用户管理 -->
<template>
  <div>用户管理</div>
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
        path: '/System/UserData',
        name: '用户管理',
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

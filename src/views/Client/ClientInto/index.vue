<!-- 客户进件 -->
<template>
  <div>客户进件</div>
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
        path: '/Client',
        name: '客户管理',
        noLink: true,
      },
      {
        path: '/Client/ClientInto',
        name: '客户进件',
        noLink: true,
      },
    ]);
  },
  created() { },
  mounted() { },
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

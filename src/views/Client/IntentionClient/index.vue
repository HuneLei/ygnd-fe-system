<!-- 意向客户 -->
<template>
  <div>意向客户</div>
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
        path: '/Client/IntentionClient',
        name: '意向客户',
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

<!-- 首页 -->
<template>
  <div>首页</div>
</template>

<script>

export default {
  activated() {
    this.$store.commit('BreadCrumbUpdate', [
      {
        path: '/index',
        name: '首页',
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

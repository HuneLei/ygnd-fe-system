<!-- 主要内容 -->
<template>
  <Layout class="main_layout">
    <!-- 面包屑的导航 -->
    <Breadcrumb class="bread_crumb">
      <BreadcrumbItem v-for="item in $store.state.view.breadCrumb" :key="item.index" :to='item.noLink ? "" : item.path'>{{item.name}}</BreadcrumbItem>
    </Breadcrumb>
    <!-- 主要目录 -->
    <Content class="content_view">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </Content>
  </Layout>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {},
};
</script>
<style scoped>
/* 主要内容 */
.main_layout {
  padding: 0 24px 24px;
}

/* 面包屑的导航 */
.bread_crumb {
  margin: 20px 0;
}

/* 主要目录 */
.content_view {
  padding: 24px;
  min-height: 280px;
  background: #fff;
}
</style>

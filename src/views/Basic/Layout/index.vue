<!-- 导航页面 -->
<template>
  <div class="layout">
    <Layout class="layout_view">
      <Header class="header_view">
        <y-header></y-header>
      </Header>
      <Layout>
        <Sider class="sider-view">
          <y-sider></y-sider>
        </Sider>
        <y-main></y-main>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import YHeader from './YHeader.vue';
import YSider from './YSider.vue';
import YMain from './YMain.vue';

export default {
  created() {},
  components: {
    YMain,
    YSider,
    YHeader,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
/* 导航页面 */
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
}
.layout_view {
  min-height: 100vh;
}

/* header样式 */
.header_view {
  padding: 0 20px;
  height: 75px;
}

/* 左边栏样式 */
.sider-view {
  background: #fff;
  overflow: auto;
  left: 0;
}
</style>

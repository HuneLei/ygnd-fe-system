<!-- 主要内容 -->
<template>
  <Layout :style="{padding: '0 24px 24px'}">
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem>Layout</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      Content
    </Content>
    <Footer>Footer</Footer>
  </Layout>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},
  computed: {
    menuitemClasses: () => [
      'menu-item',
      this.isCollapsed ? 'collapsed-menu' : '',
    ],
  },
  methods: {},
};
</script>
<style scoped>
</style>

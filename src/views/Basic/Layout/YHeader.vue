<!-- 导航头部组件 -->
<template>
  <Menu mode="horizontal" theme="dark" active-name="1" @on-select='onSelect'>
    <!-- 导航栏的logo -->
    <div class="layout-logo">
      <img src="../../../assets/img/u2082.png" alt="">
      <div>镇江阳光农贷后台管理系统</div>
    </div>
    <div class="layout-nav">
      <MenuItem class="item_name" name="1"> 王某某
      </MenuItem>
      <span class="boun_dary">|</span>
      <MenuItem class="item_exit" name="2"> 退出系统
      </MenuItem>
    </div>
  </Menu>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {
    // 选择菜单时触发
    onSelect(name) {
      console.log('name', name);
    },
  },
};
</script>
<style scoped>
/* 顶部样式 */
.ivu-menu-horizontal {
  height: 65px;
  line-height: 65px;
  padding: 5px;
}
/* 导航栏的logo */
.layout-logo {
  display: flex;
  align-content: center;
  justify-content: center;
  /* background: #5b6270; */
  border-radius: 3px;
  float: left;
  position: relative;
  /* left: 5px; */
}

.layout-logo img {
  margin-right: 10px;
}

.layout-logo div {
  color: #ffffff;
  font-size: 20px;
}

/* 导航栏项目 */
.layout-nav {
  float: right;
  margin: 0 auto;
  font-size: 18px;
}

.item_name {
  font-size: 18px;
  color: #ffffff !important;
}

.item_exit {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7) !important;
}

.item_exit:hover {
  color: #ffffff !important;
}

.boun_dary {
  color: #ffffff;
  position: fixed;
  width: 1px;
  color: #fff;
}
</style>

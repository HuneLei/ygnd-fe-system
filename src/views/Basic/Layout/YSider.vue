<!-- 侧边栏 -->
<template>
    <Menu active-name="1-2"
          theme="dark"
          width="auto"
          :class="menuitemClasses">
        <MenuItem name="1-1">
        <Icon type="ios-navigate"></Icon>
        <span>Option 1</span>
        </MenuItem>
        <MenuItem name="1-2">
        <Icon type="search"></Icon>
        <span>Option 2</span>
        </MenuItem>
        <MenuItem name="1-3">
        <Icon type="settings"></Icon>
        <span>Option 3</span>
        </MenuItem>
    </Menu>
</template>

<script>
export default {
  props: {
    isCollapsed: {
      type: Boolean,
      default: false,
    },
  },
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
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.layout-con {
  height: 100%;
  width: 100%;
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>

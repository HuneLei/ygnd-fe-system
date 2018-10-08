<!-- 侧边栏 -->
<template>
  <Menu :active-name="menuActiveName" :open-names='menuOpenName' theme="light" width="auto">
    <MenuItem name='/index' :to="'/index'">
    <Icon type="ios-navigate"></Icon>
    <span>首页</span>
    </MenuItem>
    <Submenu v-for="item in menuList" :key="item.name" :name="item.path">
      <template slot="title">
        <Icon :type="item.icon"></Icon>
        <span>{{item.name}}</span>
      </template>
      <MenuItem v-for="childitem in item.children" :name='childitem.path' :key="childitem.name" :to="childitem.path" v-text="childitem.name"></MenuItem>
    </Submenu>
  </Menu>
</template>

<script>
import baseList from '../baseList'; //  左侧菜单栏

export default {
  props: {},
  data() {
    return {
      allList: baseList.menuList, //  左侧菜单全部的
    };
  },
  mounted() {
    console.log('menuList', this.menuList);
  },
  components: {},
  computed: {
    // 左边栏展开项
    menuOpenName() {
      return this.$store.getters.getMenuOpenName;
    },
    // 左边栏选择项
    menuActiveName() {
      return this.$store.getters.getMenuActiveName;
    },
    //  根据权限接口获得的左菜单权限
    menuJson() {
      return this.$store.state.view.menuList;
    },
    //  会员信息
    memberInfo() {
      return this.$store.state.view.principal;
    },
    //  根据权限给人看的左侧菜单
    menuList() {
      const menuList = [];
      const menuJson = this.menuJson;
      const memberType = this.memberInfo.memberType;
      const menuKeys = Object.keys(menuJson);
      console.log('menuKeys', menuKeys);
      for (let i = 0; i < this.allList.length; i += 1) {
        const menuItem = this.allList[i];
        const itemChildren = [];

        if (menuItem.parent === '/index') {
          menuList.push(menuItem);
        } else if (menuKeys.indexOf(menuItem.name) > -1) {
          for (let j = 0; j < menuItem.children.length; j += 1) {
            const item = menuItem.children[j];
            if (
              item.type.indexOf(memberType) > -1 &&
              menuJson[menuItem.name].indexOf(item.name) > -1
            ) {
              itemChildren.push({
                path: item.path,
                name: item.name,
              });
            }
          }
        }
        if (itemChildren.length > 0) {
          menuList.push({
            path: menuItem.path,
            name: menuItem.name,
            icon: menuItem.icon,
            parent: menuItem.parent,
            children: itemChildren,
          });
        }
      }

      return menuList;
    },
  },
  methods: {},
};
</script>
<style scoped>
</style>

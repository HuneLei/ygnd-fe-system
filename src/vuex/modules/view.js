const state = {
  // 面包屑导航栏
  breadCrumb: [
    {
      path: '/',
      name: '首页',
    },
  ],
  // 左边栏选择项
  menuActiveName: '/index',
  // 左边栏展开项
  menuOpenName: ['/index'],
  menuList: {
    客户管理: '123',
    报表数据管理: '123',
    系统管理: '123',
  },
  principal: {
    memberType: 1,
  },
};

const getters = {
  getBreadCrumb: (state) => state.breadCrumb,
  getMenuOpenName: (state) => state.menuOpenName,
  getMenuActiveName: (state) => state.menuActiveName,
};

const actions = {};

const mutations = {
  // 更新面包屑导航栏
  BreadCrumbUpdate(state, data) {
    state.breadCrumb = data;
  },
  // 更新左边栏选择项和左边栏展开项
  MenuNameUpdate(state, Name) {
    console.log('Name', Name)
    state.menuActiveName = Name.aName;
    state.menuOpenName = Name.oName;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

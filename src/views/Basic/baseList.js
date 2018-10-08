/** 左侧栏总菜单
 * */

const menuList = [
  {

    path: 'Client',
    name: '客户管理',
    icon: 'ios-navigate',
    parent: '/index',
    children: [
      {
        path: '/Client/IntentionClient',
        name: '意向客户',
        type: [1],
      },
      {
        path: '/Client/ClientInto',
        name: '客户进件',
        type: [1],
      },
    ],
  },
  {
    path: 'Data',
    parent: '/index',
    name: '报表数据管理',
    icon: 'ios-navigate',
    children: [
      {
        path: '/Data/ClientAnalyze',
        name: '客户分析',
        type: [1],
      },
    ],
  },
  {
    path: 'System',
    name: '系统管理',
    parent: '/index',
    icon: 'ios-navigate',
    children: [
      {
        path: '/System/UserData',
        name: '用户管理',
        type: [1],
      },
      {
        path: '/System/AuthList',
        name: '角色管理',
        type: [1],
      },
      {
        path: '/System/RoleData',
        name: '权限清单',
        type: [1],
      },
      {
        path: '/System/SystemMents',
        name: '系统参数',
        type: [1],
      },
    ],
  },
];

export default {
  menuList,
};

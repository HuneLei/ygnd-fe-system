/** 左侧栏总菜单
 * */

const menuList = [
  {
    path: '/index',
    name: '客户管理',
    icon: 'ios-navigate',
    children: [
      {
        path: '/SurveyReport/DrugsHarmfulResponse',
        name: '意向客户',
        type: [1],
      },
      {
        path: '/SurveyReport/HarmfulResponseTest',
        name: '客户进件',
        type: [1],
      },
    ],
  },
  {
    path: '/index',
    name: '报表数据管理',
    icon: 'ios-navigate',
    children: [
      {
        path: '/SurveyReport/DrugsHarmfulResponse',
        name: '客户分析',
        type: [1],
      },
    ],
  },
  {
    path: '/index',
    name: '系统管理',
    icon: 'ios-navigate',
    children: [
      {
        path: '/SurveyReport/DrugsHarmfulResponse',
        name: '用户管理',
        type: [1],
      },
      {
        path: '/SurveyReport/HarmfulResponseTest',
        name: '角色管理',
        type: [1],
      },
      {
        path: '/SurveyReport/HarmfulResponseTest',
        name: '权限清单',
        type: [1],
      },
      {
        path: '/SurveyReport/HarmfulResponseTest',
        name: '系统参数',
        type: [1],
      },
    ],
  },
];

export default {
  menuList,
};

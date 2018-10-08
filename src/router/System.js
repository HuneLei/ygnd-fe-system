/* eslint-disable */
const Layout = (resolve) => require(['../views/Basic/Layout'], resolve);
const UserData = (resolve) => require(['../views/System/UserData'], resolve);
const AuthList = (resolve) => require(['../views/System/AuthList'], resolve);
const RoleData = (resolve) => require(['../views/System/RoleData'], resolve);
const SystemMents = (resolve) => require(['../views/System/SystemMents'], resolve);

export default {
  path: '/System',
  component: Layout,
  children: [
    {
      path: 'UserData',
      component: UserData,
      name: '用户管理',
    },
    {
      path: 'AuthList',
      component: AuthList,
      name: '权限清单',
    },
    {
      path: 'RoleData',
      component: RoleData,
      name: '角色管理',
    },
    {
      path: 'SystemMents',
      component: SystemMents,
      name: '系统参数',
    },
  ],
};
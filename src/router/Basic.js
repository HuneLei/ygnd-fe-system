/* eslint-disable */
const Layout = (resolve) => require(['../views/Basic/Layout'], resolve);
const Home = (resolve) => require(['../views/Basic/Home'], resolve);

export default {
  path: '/',
  redirect: '/index',
  component: Layout,
  children: [
    {
      path: 'index',
      component: Home,
      name: '首页',
    },
  ],
};

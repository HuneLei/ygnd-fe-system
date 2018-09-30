/* eslint-disable */
const Layout = (resolve) => require(['../views/Basic/Layout'], resolve);
const Home = (resolve) => require(['../views/Basic/Home'], resolve);

export default {
  path: '/',
  component: Layout,
  children: [
    {
      path: 'index',
      component: Home,
      name: '首页',
    },
  ],
};

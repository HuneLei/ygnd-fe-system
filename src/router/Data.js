/* eslint-disable */
const Layout = (resolve) => require(['../views/Basic/Layout'], resolve);
const ClientAnalyze = (resolve) => require(['../views/Data/ClientAnalyze'], resolve);

export default {
  path: '/Data',
  component: Layout,
  children: [
    {
      path: 'ClientAnalyze',
      component: ClientAnalyze,
      name: '客户分析',
    },
  ],
};
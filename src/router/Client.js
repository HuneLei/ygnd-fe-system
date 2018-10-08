/* eslint-disable */
const Layout = (resolve) => require(['../views/Basic/Layout'], resolve);
const ClientInto = (resolve) => require(['../views/Client/ClientInto'], resolve);
const IntentionClient = (resolve) => require(['../views/Client/IntentionClient'], resolve);

export default {
  path: '/Client',
  component: Layout,
  children: [
    {
      path: 'ClientInto',
      component: ClientInto,
      name: '客户进件',
    },
    {
      path: 'IntentionClient',
      component: IntentionClient,
      name: '意向客户',
    },
  ],
};
import 'iview/dist/styles/iview.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './iview-ui';
import './assets/theme/index.less';

import config from './config';
import store from './vuex/store';

Vue.config.productionTip = false

// 路由进来时
router.beforeEach((to, from, next) => {
  store.commit('MenuNameUpdate', {
    aName: to.path,
    oName: [to.path.split('/')[1]]
  })
  next()
})

// 路由出去时
router.afterEach((to, from) => {
  console.log(to.path)
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

import 'iview/dist/styles/iview.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './iview-ui';

import config from './config';
import store from './vuex/store';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

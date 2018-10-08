import Vue from 'vue'
import Router from 'vue-router'
import Data from './Data';
import Basic from './Basic';
import Client from './Client';
import System from './System';

Vue.use(Router)

export default new Router({
  routes: [
    Data,
    Basic,
    Client,
    System,
  ]
})

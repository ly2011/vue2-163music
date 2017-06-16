import Vue from 'vue'
import Router from 'vue-router'

import Index from '../views/index'
import Login from '../views/login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  },{
    path: '/index',
    // name: 'index',
    component: Index
  }, {
    path:'/login',
    name: 'login',
    component: Login
  }]
})

router.afterEach((from,to) => {
  console.log(from.name);
})

export default router

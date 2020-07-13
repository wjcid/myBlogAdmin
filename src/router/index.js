import Vue from 'vue'
import Router from 'vue-router'
import login from '@/router/path/login.js' // 登录页

Vue.use(Router)

const router = new Router({
  routes: [
    login
  ]
})


export default router
import Vue from 'vue'
import Router from 'vue-router'
import login from '@/router/path/login.js' // 登录页
import home from '@/router/path/home.js' // 首页
import article from '@/router/path/article.js' // 文章管理页

Vue.use(Router)

const router = new Router({
  routes: [
    login,
    home,
    article
  ]
})


export default router
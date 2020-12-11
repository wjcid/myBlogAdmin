import Vue from 'vue'
import Router from 'vue-router'
import login from '@/router/path/login.js' // 登录页
import home from '@/router/path/home.js' // 首页
import article from '@/router/path/article.js' // 文章管理页
import file from '@/router/path/file.js' // 文章管理页

Vue.use(Router)

const router = new Router({
  routes: [
    login,
    home,
    article,
    file
  ]
})


export default router
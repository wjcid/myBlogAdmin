// 登录页
export default {
    path: '/',
    name: 'login',
    component: resolve => { require(['@/views/login/index.vue'], resolve) }
  }
// 首页
export default {
    path: '/home/',
    name: 'home',
    component: resolve => { require(['@/views/home/index.vue'], resolve) }
  }
// 文章管理
export default {
    path: '/article/',
    name: 'article',
    component: resolve => { require(['@/views/article'], resolve) },
    children: [
      {
      path: 'list',
      component: resolve => require(['@/views/article/artList'], resolve)
      },
      {
        path: 'form',
        component: resolve => require(['@/views/article/artForm'], resolve)
      }
    ]
  }
// 文章管理
export default {
    path: '/fileUpd/',
    name: 'fileUpd',
    component: resolve => { require(['@/views/file'], resolve) },
    children: [
      {
      path: 'list',
      component: resolve => require(['@/views/file/fileList'], resolve)
      },
      {
        path: 'form',
        component: resolve => require(['@/views/file/fileForm'], resolve)
      }
    ]
  }
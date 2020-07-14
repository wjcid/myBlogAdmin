<template>
<div class="aside">
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" router>
    <el-menu-item v-for="(menu1, index1) in $consts.SIDEBAR_MENUS" :index="menu1.route" :key='index1'>
      {{menu1.title}}
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
//style="visibility:hidden;"$consts.SIDEBAR_MENUS
export default {
  name: 'Aside',
  /*created () {
    this.menu_data();
  },
  methods: {
    menu_data() {
      let nav = localStorage.getItem('nav')
      var nav_menu1 = [] //存储所得循环数据
      var i = 0 //循环所得数组 key 初始化
      for (let index = 0; index < nav.length; index++) {
        for (let key = 0; key < this.$consts.SIDEBAR_MENUS.length; key++) {
          if(nav[index] == this.$consts.SIDEBAR_MENUS[key].id) {
            nav_menu1[i] = this.$consts.SIDEBAR_MENUS[key]
            i++
          }
        }  
      }
        this.nav_menu = nav_menu1
    }
  },*/
  data() {
    return {
      nav_menu: []
    }
  }
}
</script>

<style src="" scoped>
  .aside {
    height: 900px;
    padding-top: 30px;
    width: 15%;
    float: left;
    background: white;
  }
  .el-menu-item {
    font-size: 18px;
    margin: 10px 0px;
  }
</style>
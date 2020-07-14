<template>
<div class="header">
    <div class="sys_name" @click="$router.push('/home')" style="cursor: pointer;">MyBlog后台管理系统</div>
      <i class="el-icon-switch-button" @click="$router.push('/')" style="cursor: pointer;"></i>
      <div class="n_time">{{time}}</div>
</div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      time: '2020-06-11 15:13'
    } 
    
  }
}
</script>

<style src="" scoped>
  .header {
    height: 80px;
    background: #4B70E2;
    color: white;
    overflow: hidden;
    line-height: 80px;
    font-size: 20px;
  }
  .sys_name {
    float: left;
    padding-left: 50px;
  }
  .el-icon-switch-button {
    float: right;
    padding: 25px 30px 0px 20px;
    font-size: 25px;
  }
  .n_time {
    float: right;
    padding-right: 30px;
  } 
</style>
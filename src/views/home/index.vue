<template>
<div>
<Header />
<Aside />
<div class="main">
  <el-row>
    <el-col :span="12">
      <el-card shadow="hover">
          个人资料
          <div class="acc_div">
            <div class="indiv"><i class="el-icon-user"></i>当前用户：{{name}}</div>
            <div class="indiv"><i class="el-icon-mobile-phone"></i>注册手机号：{{phone}}</div>
            <div class="indiv"><i class="el-icon-office-building"></i>单位：{{unit}}</div>
            <div class="indiv"><i class="el-icon-message"></i>邮箱：{{email}}</div>
            <div class="indiv"><i class="el-icon-time"></i>上次登录时间：{{l_time}}</div>
          </div>
          <div class="modi"><el-button type="primary" icon="el-icon-edit" circle @click="$router.push('/user_manage/modify')"></el-button></div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card shadow="hover">
          系统信息
      </el-card>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="12">
      <el-card shadow="hover">
          操作指南
      </el-card>
    </el-col>  
    <el-col :span="12">
      <el-card shadow="hover">
          主要负责人联系方式
      </el-card>
    </el-col>
  </el-row>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      name: 'root',
      phone: '17600132820',
      unit: 'XXXXXXXXXXXXXx',
      email: '17600132820@163.com',
      l_time: '2020-06-10 13:14'
    }
  }
}
</script>

<style src="" scoped>
  .main {
    float: left;
    width: 85%;
    padding-top: 30px;
  }
  .el-row {
    padding: 30px;
  }
  .el-card {
    width: 70%;
    height: 350px;
    margin: 0 auto;
  }
  .acc_div {
    padding: 20px 0px 0px 0px;
    text-align: left;
    font-size: 18px;
  }
  .indiv {
    padding: 5px;
  }
  i {
    padding-right: 10px;
  }
  .modi {
    padding-top: 20px;
  }
</style>
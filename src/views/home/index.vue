<template>
<div style="width:600px;">
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</div>
</template>
<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
<script>
export default {
   methods: {
      visits_data() {
        //服务端验证 是否存在
        this.$axios.post(this.$consts.BASE_URL+'visits_data', {
            
          }).then(res=>{
            if (res.data.code == 10200) {
              localStorage.setItem('name',res.data.data.account)
              localStorage.setItem('token',res.data.data.token)
              this.$router.replace('/home');
            } else {
              this.$message({message:'账户或密码有误',type:'error'});
              return
            }
          })
      }
    },
  data () {
    this.chartSettings = {
        metrics: ['访问用户', '下单用户'],
        dimension: ['日期']
      }
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
      }
  }
}
</script>

<style src="" scoped>
.el-card {
  width: 90%;
  height: 150px;
  color: #FFF;
  font-size: 18px;
}
.card1 {
  background-color: rgb(235, 73, 8);
}
.card2 {
  background-color: rgb(80, 154, 223);
}
.card3 {
  background-color: rgb(71, 134, 113);
}
.card4 {
  background-color: rgb(233, 170, 35);
}
.tit_box {
  width: 200px;
  height: 40px;
  float: left;
  background-color: rgb(80, 154, 223);
  line-height: 40px;
  color: #FFF;
  margin: 0px 0px 20px 0px;
  overflow: hidden;
}
.el-divider {
  background-color: rgb(80, 154, 223);
}
.el-divider--horizontal {
  width: 95%;
  margin: 39px 0;
}
.el-col {
  padding-bottom: 50px;
}
  .main {
    float: left;
    width: 85%;
    padding-top: 30px;
  }
  .el-row {
    padding: 30px;
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
<template>
<div>
<Header />
<Aside />
<div class="main">
<div class="table_name">个人博客文章管理</div>
<div class="addarc"><el-button type="primary" icon="el-icon-edit" style="float:left;" @click="$router.push('/article/form')">写文章</el-button></div>
<el-tabs v-model="activeName">
  <el-tab-pane label="技术总结" name="first">
<el-table
:data="tableData"
style="width: 100%">
<el-table-column
      :prop="tit.prop"
      :label="tit.label"
      :width="tit.width" v-for="(tit, index) in $consts.ARTICLE_TABLE" :key='index'>
      <el-table-column
        :prop="tit1.prop"
        :label="tit1.label"
        :width="tit1.width" v-for="(tit1, index1) in tit.children" :key='index1'>
  </el-table-column>
</el-table-column>
<el-table-column label="操作" width="160">
      <template slot-scope="scope">
        <el-button
          size="mini"
           type="primary"
          @click="pass(scope.$index, scope.row)">通过</el-button>
            <el-button slot="reference" size="mini" type="danger" @click="noPass(scope.$index, scope.row)">不通过</el-button>
      </template>
    </el-table-column>
</el-table>
</el-tab-pane>
<el-tab-pane label="书籍分享" name="second">
<el-table
:data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
style="width: 100%">
<el-table-column
      :prop="tit.prop"
      :label="tit.label"
      :width="tit.width" v-for="(tit, index) in $consts.ARTICLE_TABLE" :key='index'>
      <el-table-column
        :prop="tit1.prop"
        :label="tit1.label"
        :width="tit1.width" v-for="(tit1, index1) in tit.children" :key='index1'>
  </el-table-column>
</el-table-column>
</el-table>
<el-pagination
  background
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      layout="total, prev, pager, next"
      :total="total"
      :page-size="pagesize">
</el-pagination>
</el-tab-pane>
<el-tab-pane label="生活日志" name="third">
<el-table
:data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
style="width: 100%">
<el-table-column
      :prop="tit.prop"
      :label="tit.label"
      :width="tit.width" v-for="(tit, index) in $consts.ARTICLE_TABLE" :key='index'>
      <el-table-column
        :prop="tit1.prop"
        :label="tit1.label"
        :width="tit1.width" v-for="(tit1, index1) in tit.children" :key='index1'>
  </el-table-column>
</el-table-column>
</el-table>
<el-pagination
  background
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      layout="total, prev, pager, next"
      :total="total"
      :page-size="pagesize">
</el-pagination>
</el-tab-pane>
</el-tabs>
</div>
</div>
</template>

<script>
export default {
  /*created () {
    this.getInfo_0();//待审核
    this.getInfo_1();//已审核
  },
  inject: ['reload'],//注入reload方法
  methods: {
    handleCurrentChange: function(currentPage){
      this.currentPage = currentPage;
      console.log(this.currentPage)  //点击第几页
    },
    pass (index,row) {
      this.$axios.post(this.$consts.BASE_URL+'audStatus', {
          status: 1,
          data_type: 'seawater_info',
          id: row.id
        }).then(res=>{
          if (res.data.code == 1) {
            this.$message({message:'审核通过操作成功',type:'success'});
            this.reload() 
          } else {
            this.$message({message:'操作失败',type:'error'});
            return
          }
        })
    },
    noPass (index,row) {
      this.$axios.post(this.$consts.BASE_URL+'audStatus', {
          status: 2,
          data_type: 'seawater_info',
          id: row.id
        }).then(res=>{
          if (res.data.code == 1) {
            this.$message({message:'未通过操作成功',type:'success'});
            this.reload()
          } else {
            this.$message({message:'操作失败',type:'error'});
            return
          }
        })
    },
    getInfo_0() {    
      this.$axios.post(this.$consts.BASE_URL+'audStatusData', {
          data_type: 'seawater_info',
          status: '0'
        }).then(res=>{
          this.tableData0 = res.data.data.list
        })
    },
    getInfo_1() {    
      this.$axios.post(this.$consts.BASE_URL+'audStatusData', {
          data_type: 'seawater_info',
          status: '1'
        }).then(res=>{
          this.tableData1 = res.data.data.list
          this.total = res.data.data.total
        })
    }
  },*/
  data() {
        return {
          activeName: 'first',
          total: 0,
          currentPage:1, //初始页
          pagesize:this.$consts.PAGE_SIZE,    //每页的数据
          tableData: [],
          tableData1: [],
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
.el-tabs {
  width: 95%;
  margin: 0 auto;
}
.table_name {
      padding-bottom: 40px;
      font-size: 18px;
}
.el-table {
     margin: 0 auto; 
}
.el-pagination {
      width: 40%;
      padding-top: 30px;
}
.addarc {
  width: 95%;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 20px;
}
</style>
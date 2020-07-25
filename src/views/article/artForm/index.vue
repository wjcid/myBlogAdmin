<template>
<div>
<Header />
<Aside />
<div class="main">
<div class="table_name">添加博客文章</div>
    <el-form ref="form" :model="formInfo" label-width="120px">
    
    <el-form-item label="文章标题：">
        <el-input
        placeholder="请输入标题"
        v-model="formInfo.title"
        clearable>
        </el-input>
    </el-form-item>   
    <el-form-item label="插图：">
        <el-upload
            class="upload-demo"
            :action="action"
            :data="updata"
            :on-success="upsucess">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </el-form-item>
    <el-form-item label="文章类型：">
        <el-select v-model="formInfo.type" clearable placeholder="请选择" @change="tags_data">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
        </el-select>
    </el-form-item>  
    <el-form-item label="标签：">
        <el-checkbox-group v-model="formInfo.tags">
        <el-checkbox v-for="tag in checktags" :key="tag.index" :label="tag.name"></el-checkbox>
        </el-checkbox-group>
    </el-form-item>
    <el-form-item label="文章内容：">
    <quill-editor 
            v-model="formInfo.content" 
            ref="myQuillEditor" 
            :options="editorOption">
        </quill-editor>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="onSubmit">确认提交</el-button>
        <el-button @click="$router.push('/article/list')">取消</el-button>
    </el-form-item>
  </el-form>
</div>
</div>
</template>

<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import hljs from 'highlight.js'
import 'highlight.js/styles/xcode.css'
export default {
  components: {
    quillEditor
  },
  methods: {
      //上传成功
    upsucess(response,fileList) {
      if (response.code == 1) {
        this.$message({message:'上传成功',type:'success'});
        this.formInfo.pic_url = response.data.url
      } else {
        this.$message({message: response.msg,type:'error'});
        console.log(fileList)
        this.formInfo.pic_url = ''
        this.file_list = []
      }
    },
      onSubmit() {
        this.$axios.post(this.$consts.BASE_URL+'addArt', {
            title: this.formInfo.title,
            pic_url: this.formInfo.pic_url,
            type: this.formInfo.type,
            tags: this.formInfo.tags,
            content: this.formInfo.content
          }).then(res=>{
            if (res.data.code == 10200) {
              this.$message({message:res.data.msg,type:'success'});
              this.$router.replace('/article/list');
            } else {
              this.$message({message:res.data.msg,type:'error'});
              return
              
            }
          })
      },
      tags_data(value) {
          switch (value) {
              
              case '1':
                this.checktags = []
                this.checktags = this.jsOptions 
                break;
              case '2':
                this.checktags = []
                this.checktags = this.readOptions 
                break;
              case '3':
                this.checktags = []
                this.checktags = this.liveOptions 
                break;
          }
      },
        onEditorReady() { // 准备编辑器
 
        },
         // 转码
        escapeStringHTML(str) {
            str = str.replace(/&lt;/g,'<');
            str = str.replace(/&gt;/g,'>');
            return str;
        }
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
    },
    mounted() {
        let content = '';  // 请求后台返回的内容字符串
        this.str = this.escapeStringHTML(content);

    },
  data () {
      return {
        action: this.$consts.BASE_URL+'upload',
        updata: {genre: 'pic',token: localStorage.getItem('token')},
        options: [{
            value: '1',
            label: '技术总结'
            }, {
            value: '2',
            label: '书籍分享'
            }, {
            value: '3',
            label: '生活日志'
        }],
        checktags: [],//标签渲染数据
        jsOptions: [
        {
            index: 1,
            name: 'PHP',
        },{
            index: 2,
            name: '数据库',
        },{
            index: 3,
            name: 'Linux',
        },{
            index: 4,
            name: 'Vue',
        },{
            index: 5,
            name: 'go',
        }],
        readOptions: [
        {
            index: 1,
            name: '小说',
        },{
            index: 2,
            name: '理财',
        },{
            index: 3,
            name: '心理',
        },{
            index: 4,
            name: '码农技术',
        }],
        liveOptions: [
        {
            index: 1,
            name: '兴趣',
        },{
            index: 2,
            name: '健康',
        },{
            index: 3,
            name: '杂谈',
        }],
        formInfo:{
            title: '',
            pic_url: './',
            content: '',
            tags: [],
            type: ''
        },
        editorOption: {
            modules:{
                toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],
                    [{ 'header': 1 }, { 'header': 2 }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    [{ 'script': 'sub' }, { 'script': 'super' }],
                    [{ 'indent': '-1' }, { 'indent': '+1' }],
                    [{ 'direction': 'rtl' }],
                    [{ 'size': ['small', 'medium', 'large', 'huge', 'false'] }],
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    [{ 'font': [] }],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'align': [] }],
                    ['clean'],
                    ['link', 'image', 'video']
                ],
                syntax: {
                    highlight: text => {
                        return hljs.highlightAuto(text).value; // 这里就是代码高亮需要配置的地方
                    }
                }
            }
        }
      }
  }
}
</script>

<style src="" scoped>
.main {
      float: left;
      width: 85%;
      padding-top: 100px;
}
.table_name {
      padding-bottom: 40px;
      font-size: 18px;
}
.el-input {
  width: 300px;
  float: left;
}
.el-button {
  float: left;
}
.el-form {
  padding-top: 30px;
}
.quill-editor {
    background: white;
    width: 95%;
}
.upload-demo {
    text-align: left;
}
.el-select {
    float: left;
}
.el-checkbox {
    float: left;
}
</style>
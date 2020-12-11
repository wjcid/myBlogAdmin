<template>
  <div id="app">
    <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </div>
    <router-view v-if="isRouterAlive"/>

    <!-- 将上传组件全局注册 -->
        <global-uploader></global-uploader>
  </div>
</template>

<script>
import globalUploader from '@/components/uploader/index.vue'
export default {
  name: 'App',
  components: {
            globalUploader
        },
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function(){
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0px;
  background: #ecf0f3;
}
</style>

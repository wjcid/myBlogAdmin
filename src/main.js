import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import components from '@/utils/components.js'
import uploader from 'vue-simple-uploader'
Vue.use(uploader)
Vue.use(components)
Vue.use(ElementUI)
Vue.config.productionTip = false
//http配置
import axios from '@/axiosConfig.js';
Vue.prototype.$axios=axios
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

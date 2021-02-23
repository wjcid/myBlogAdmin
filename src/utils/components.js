import Header from '@/components/header' // Header
import Aside from '@/components/aside' // Aside
import consts from '@/utils/consts'


export default (Vue) => {
  Vue.prototype.$consts = consts
  Vue.component('Header', Header)
  Vue.component('Aside', Aside)
  
}

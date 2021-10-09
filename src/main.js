import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import VMask from "v-mask"
import router from './router/index.js'



Vue.use(VMask)
Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// import SobreOProfissional from './components/SobreOProfissional/SobreOProfissional.vue'
// import Profissional from './components/Profissional/Profissional.vue'

Vue.config.productionTip = false
// Vue.component('app-SobreOProfissional', SobreOProfissional)
// Vue.component('app-Profissional', Profissional)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import ContadorLocal from './ContadorLocal.vue'

Vue.config.productionTip = false
Vue.component('app-contadorLocal', ContadorLocal)

new Vue({
  render: h => h(App),
}).$mount('#app')

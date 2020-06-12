import Vue from 'vue'
import App from './App.vue'
import './bootstrap'
import './axiosCli'
import './form'
import './filters'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

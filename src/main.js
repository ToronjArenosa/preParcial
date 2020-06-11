import Vue from 'vue'
import App from './App.vue'
import './bootstrap'
import './axiosCli'
import './form'
import store from './store'
import router from './routes'
import './filters'
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

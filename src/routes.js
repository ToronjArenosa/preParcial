import Vue from  'vue'
import VueRouter from 'vue-router'

import Formulario from "./components/Formulario.vue";
import Contactos from "./components/Vista.vue";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
      {path: '/', redirect: '/formulario'},
      {path: '/Formulario', component: Formulario},
      {path: '/Vista', component: Contactos}
    ]
})

  
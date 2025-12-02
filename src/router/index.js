import { createRouter, createWebHashHistory } from 'vue-router'


import Home from '../pages/Home.vue'
import Formulario from '../pages/Formulario.vue'
import Favoritos from '../pages/Favoritos.vue'
import Creditos from '../pages/Creditos.vue'


export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/formulario', component: Formulario },
    { path: '/favoritos', component: Favoritos },
    { path: '/creditos', component: Creditos },
  ]
})

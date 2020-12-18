import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HomeAdmin from '../views/HomeAdmin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeAdmin
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },  
  {
    path: '/CursosAdmin',
    name: 'CursosAdmin',
    component: () => import('../components/CursosAdmin.vue')
  },  
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },  
  {
    path: '/ListUA',
    name: 'ListUA',
    component: () => import('../components/ListUA.vue')
  }, 
  {
    path: '/Persona',
    name: 'ListarPersona',
    component: () => import('../components/ListarPersona.vue')
  }, 
  {
    path: '/NewPersona',
    name: 'CrearPersona',
    component: () => import('../components/NuevaPersona.vue')
  }, 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HomeAdmin from '../views/HomeAdmin.vue'
import store from '../store'
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
    component: () => import('../components/CursosAdmin.vue'),
    meta: { requiredAuth: true}
  },  
  {
    path: '/AddCursos',
    name: 'AddCursosAdmin',
    component: () => import('../components/NuevoCurso.vue'),
    meta: { requiredAuth: true}
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: { requiredAuth: true}
  },  
  {
    path: '/Persona',
    name: 'ListarPersona',
    component: () => import('../components/ListarPersona.vue'),
    meta: { requiredAuth: true}
  }, 
  {
    path: '/AddPersona',
    name: 'AddPersona',
    component: () => import('../components/NuevaPersona.vue'),
    meta: { requiredAuth: true}
  }, 
  {
    path: '/ListarUsuario',
    name: 'ListarUsuario',
    component: () => import('../components/ListarUsuario.vue'),
    meta: { requiredAuth: true}
  }, 
  {
    path: '/AddUsuario',
    name: 'AddUsuario',
    component: () => import('../components/NuevoUsuario.vue'),
    meta: { requiredAuth: true}
  }, 
  {
    path: '/ListarUA',
    name: 'ListarUA',
    component: () => import('../components/ListUA.vue'),
    meta: { requiredAuth: true}
  }, 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next) => {
  const rutaProtegida = to.matched.some(record => record.meta.requiredAuth);
  if (rutaProtegida && store.state.token) {
    console.log("ESTADMOS")
    next({name: 'Login'})
  }else {
    next();
  }
});

export default router

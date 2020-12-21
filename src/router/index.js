import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import HomeAdmin from '../views/HomeAdmin.vue'
import store from '../store'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeAdmin,
    meta: {
      requiredAuth: true
    }
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
    meta: {
      requiredAuth: true
    }
  },  
  {
    path: '/AddCursos',
    name: 'AddCursosAdmin',
    component: () => import('../components/NuevoCurso.vue'),
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      logeado: false
    }
  },  
  {
    path: '/Persona',
    name: 'ListarPersona',
    component: () => import('../components/ListarPersona.vue'),
  }, 
  {
    path: '/AddPersona',
    name: 'AddPersona',
    component: () => import('../components/NuevaPersona.vue'),
  }, 
  {
    path: '/ListarUsuario',
    name: 'ListarUsuario',
    component: () => import('../components/ListarUsuario.vue'),
  }, 
  {
    path: '/AddUsuario',
    name: 'AddUsuario',
    component: () => import('../components/NuevoUsuario.vue'),
  }, 
  {
    path: '/ListarUA',
    name: 'ListarUA',
    component: () => import('../components/ListUA.vue'),
  }, 
  {
    path: '/VistaCursos',
    name: 'VistaCursos',
    component: () => import('../views/VistaCursos.vue'),
  }, 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next) => {
  const rutaProtegida = to.matched.some(record => record.meta.requiredAuth);
  const logeadoUsuario = to.matched.some(record => record.meta.logeado);
  if (rutaProtegida && store.state.token === '') {
    next({name: 'Login'})
  } else {
    next();
  }
});

export default router

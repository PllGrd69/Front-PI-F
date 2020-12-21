import { createStore } from 'vuex'
import jwt_decode from "jwt-decode";
import router from '../router';
// import { FormTagsPlugin } from 'bootstrap-vue';

export default createStore({
  state: {
    /* Variables uso de autentificacion y rol de usuario */
    token: '',
    usuarioDB: '',
    rolUsuario: '',
    /* Variables de uso general Del sistema*/
    personaUpdate: '',
  },
  mutations: {
    /* Metodos para mutar uso general, en rol y autentificaciom */
    obtenerUsuario(state, payload){
      state.token = payload;
      if (payload === '') {
        state.usuarioDB = ''
      } else {
        state.usuarioDB = jwt_decode(payload);
        if (state.usuarioDB.rol){
          let rol = localStorage.getItem('rol')
          if (!rol){
            localStorage.setItem('rol', state.usuarioDB.rol[0]);
            rol = state.usuarioDB.rol[0]
          } 
          state.rolUsuario = rol; 
        }    
      }
    },
    asijnarRol(state, payload){
      localStorage.setItem('rol', payload);
      state.rolUsuario = payload;
    },
    /* Uso de matacion de variables segun se requiera el usuario */
    actualizarPersona: (state, playload) => {
      // console.log(playload)
      state.personaUpdate = playload;
    }
  },
  actions: {
    /* Metodos para activar la autentificiacion y control invocaciones */
    guardarUsuario({commit}, payload) {
      localStorage.setItem('token', payload);
      commit('obtenerUsuario', payload)
    },
    cerrarSesion({commit}){
      commit('obtenerUsuario','');
      localStorage.removeItem('token');
      localStorage.removeItem('rol');
      router.push({name: 'Login'});
x    },
    leerToken({commit}){
      const token = localStorage.getItem('token')
      if (token) {
        commit('obtenerUsuario', token);
      } else {
        commit('obtenerUsuario', '');
      }
    },
    cambiarRol({commit}, payload){
      commit('asijnarRol', payload)
    },
    /* USO especifico para invocar metodos que el usuario requiera */
    actualizarPersona: ({commit}, payload) => {
      commit('actualizarPersona', payload);
    }
  },
  modules: {
  },
  getters: {
    /* Metodos get para uso de roles y autentificaciones */
    estaActivo: state => !!state.token,
    rolesUsuario: state => {
      return state.usuarioDB;
    },
    rolUsuarioEstado: state => {
      return state.rolUsuario;
    },
    getToken: state => {
      return state.token
    },
    getUsuarioSesion: state => state.usuarioDB,
    /* Metodos para uso general, para acciones del usuario */
    getPersonaUpdate: state => state.personaUpdate,
    
  }
})
 
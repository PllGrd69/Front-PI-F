import { createStore } from 'vuex'
import jwt_decode from "jwt-decode";
import router from '../router';
// import { FormTagsPlugin } from 'bootstrap-vue';

export default createStore({
  state: {
    token: '',
    usuarioDB: '',
    rolUsuario: '',
  },
  mutations: {
    obtenerUsuario(state, payload){
      state.token = payload;
      if (payload === '') {
        state.usuarioDB = ''
      } else {
        state.usuarioDB = jwt_decode(payload);
        state.rolUsuario = state.usuarioDB.rol[0]; 
      }
    },
    asijnarRol(state, payload){
      state.rolUsuario = payload;
    }
  },
  actions: {
    guardarUsuario({commit}, payload) {
      localStorage.setItem('token', payload);
      commit('obtenerUsuario', payload)
    },
    cerrarSesion({commit}){
      commit('obtenerUsuario','');
      localStorage.removeItem('token')
      router.push({name: 'Login'});
    },
    leerToken({commit}){
      const token = localStorage.getItem('token')
      if (token) {
        commit('obtenerUsuario', token);
      } else {
        commit('obtenerUsuario', '');
      }
    },
    cambiarRol({commit}, payload){
      console.log(payload)
      commit('asijnarRol', payload)
    }
  },
  modules: {
  },
  getters: {
    estaActivo: state => !!state.token,
    rolesUsuario: state => {
      return state.usuarioDB;
    },
    rolUsuarioEstado: state => {
      console.log("roollllllll")
      return state.rolUsuario;
    },
    getToken: state => {
      return state.token
    }
  }
})
 
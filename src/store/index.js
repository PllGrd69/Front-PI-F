import { createStore } from 'vuex'
import jwt_decode from "jwt-decode";
import router from '../router';

export default createStore({
  state: {
    token: '',
    usuarioDB: ''
  },
  mutations: {
    obtenerUsuario(state, payload){
      state.token = payload;
      if (payload === '') {
        state.usuarioDB = ''
      } else {
        state.usuarioDB = jwt_decode(payload)
      }
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
    }
  },
  modules: {
  },
  getters: {
    estaActivo: state => !!state.token,
    tipoUsuario: state => {
      return state.usuarioDB
    }
  }
})
 
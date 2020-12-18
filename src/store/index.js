import { createStore } from 'vuex'
import jwt_decode from "jwt-decode";
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
    }
  },
  modules: {
  }
})
 
<template>
<div>
    <div class="masthead">
      <div class="container h-50">
        <div class="row h-100 align-items-center justify-content-center text-center">
            <div class="col-lg-10 align-self-end bg-white">
                  <div class="row no-gutter">
                    <div class="d-none d-md-flex col-md-4 col-lg-6 bg-login"></div>
                        <div class="col-md-8 col-lg-6">
                          <div class="login d-flex align-items-center py-5">
                            <div class="container ">
                              <div class="row">
                                <div class="col-md-9 col-lg-8 mx-auto">
                                  <h3 class="login-heading mb-4">Acceso a la plataforma</h3>
                                  <form @submit.prevent="login()">
                                    <div class="form-label-group">
                                      <input v-model="usuario.Email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                                      <label for="inputEmail">Correo o Usuario</label>
                                    </div>

                                    <div class="form-label-group">
                                      <input v-model="usuario.Password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                                      <label for="inputPassword">Contraseña</label>
                                    </div>

                                    <div class="custom-control custom-checkbox mb-3">
                                      <input type="checkbox" class="custom-control-input" id="customCheck1">
                                      <label class="custom-control-label" for="customCheck1">Recordar Contaseña</label>
                                    </div>

                                    <button :disabled="isLoging" class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">
                                      <div  v-if="isLoging" class="spinner-border spinner-border-sm"></div>
                                      Iniciar Sesión
                                    </button>
                                    
                                    <div class="text-center disabled">
                                      <a class="small disabled" href="#">Forgot password?</a>
                                      <router-link to="/" class="nav-link text-light">Presiona aca papi</router-link>
                                      </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import axio from "axios";
import {mapActions, mapGetters} from 'vuex';
import Swal from 'sweetalert2';
import router from '../router'
export default {
  data(){
    return {
      usuario: {Email: '', Password: ''},
      isLoging : false
    }
  },
  methods: {
    ...mapActions(['guardarUsuario']),
    login() {
      this.isLoging = true;
      // console.log(this.usuario)
      this.axios.post('/usuariologin/login', this.usuario)
      .then(res =>{
        const token = res.data.token;
        console.log("Se inicio sesion")
        this.guardarUsuario(token)
        router.push({ name: "Home" });
        this.mensajeForms('success', 'Bienbenido, welcome, bienbenute, habla pe causita')
        
      })
      .catch(e=>{
        this.isLoging = false;
        this.mensajeForms('error', e.response.data)
      })
    },
    mensajeForms(iconMsg, mensajetStr){
      Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
        }).fire({
        icon: iconMsg,
        title: mensajetStr
        })
    }
  },
  created(){
    if (this.estaActivo){
      this.$router.push({name: "Home"})
    }
  },
  computed:{
    ...mapGetters(['estaActivo'])
  }
}
</script>

<style>
:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: 0.75rem;
}
.login,
.image {
  min-height: 80vh;
}

.bg-login {
  background-image: url("../assets/img-login.jpg");
  background-size: cover;
  background-position: center;
}

.login-heading {
  font-weight: 300;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group>input,
.form-label-group>label {
  padding: var(--input-padding-y) var(--input-padding-x);
  height: auto;
  border-radius: 2rem;
}

.form-label-group>label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  cursor: text;
  /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown)~label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}

@supports (-ms-ime-align: auto) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

@media all and (-ms-high-contrast: none),
(-ms-high-contrast: active) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}

</style>

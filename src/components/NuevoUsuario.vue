<template>
  <div>
    <div class="navigation">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-md-10 col-sm-9 col-8">
            <nav class="navbar navbar-expand-lg">
              <div
                class="collapse navbar-collapse sub-menu-bar"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <router-link to="/">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <!-- <router-link to="/cursos">Cursos</router-link> -->
                    <a >Cursos</a>
                  </li>
                  <li class="nav-item">
                    <router-link to="/Persona">Persona</router-link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <section id="page-banner" class="pt-105 pb-110 bg_cover" data-overlay="8">
      <div
        class="container"
        style="background-image: url(images/slider/page-banner-2.jpg)"
      >
        <div class="row">
          <div class="col-lg-12">
            <div class="page-banner-cont">
              <h2>Crear Usuario</h2>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Crear Usuario
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="courses-part" class="pt-10 pb-120 gray-bg">
      <section id="corses-singel" class="pt-50 pb-120 gray-bg">
        <div class="container">
          <div class="row mb-10">
            <div class="col-lg-6 col-md-6">
              <div class="support-button d-none d-md-block"></div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="support-button d-none d-md-block">
                <!-- <router-link
                  to="/cursosadmin/adduaform"
                  class="nav-link text-light"
                > -->
                  <!--  <div class="button">
                    <a href="#" class="main-btn">Añadir Sucursal</a>
                  </div>-->
                <!-- </router-link> -->
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="corses-singel-left">
                <div class="container">
                  <h2 v-if="actualizar">
                    Actualizar a {{nombrePersonaUpdate}} con el id: <strong>{{ this.persona.ID }}</strong>
                  </h2>
                  <h2 v-else>Crear Usuario</h2>
                 
                  <hr class="divider my-4" />
                  <button
                    type="button"
                    class="btn btn-primary mb-2 col-sm-2 mt-1"
                    @click="regresarListaUsuarios()"
                  >
                    ATRAS
                  </button>

                   <hr class="my-4" />
                  <!-- <button class="btn btn-primary ">Seleccionar Persona</button> -->
                  <div class="row">
                  <div class="col-md-12">
                    <div id="card-725447">
                      <div class="card">
                        <div class="card-header">
                          <a class="card-link collapsed" data-toggle="collapse" data-parent="#card-725447" href="#card-element-652623">Busque y seleccione a la persona</a>
                        </div>
                        <div id="card-element-652623" class="collapse">
                          <div class="card-body">
                            <!-- TABLA PERSONA -->
                            <form class="form-inline" @submit.prevent="buscarPersona()">
                              
                              <div class="form-group mx-sm-3 mb-2">
                                <select v-model="buscarPersonaPor" class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                  <option value="ID" selected>ID</option>
                                  <option value="DNI">DNI</option>
                                  <option value="NOMBRE" >NOMBRE</option>
                                  <option value="APELLIDO PATERNO">APELLIDO PATERNO</option>
                                  <option value="APELLIDO MATERNO">APELLIDO MATERNO</option>
                                </select>
                              </div>

                              <div class="form-group mx-sm-3 mb-2">
                                <input v-model="busquedaPersonaText" type="text" class="form-control" id="inputPassword2" :placeholder="'BUSCAR POR '+ buscarPersonaPor">
                              </div>
                              
                              <button type="submit" class="btn btn-primary mb-2">Buscar Persona</button>
                            </form>
                            <!-- FIN TABLA PERSONA -->
                            <!-- MOSOTRAR PERSONAS -->


                            <div class="row">
                              <div class="col-md-12">
                                <div id="card-14272">
                                  <div class="card">
                                    <div class="card-header">
                                      <a class="card-link" data-toggle="collapse" data-parent="#card-14272" href="#card-element-217024">Personas Encontradas {{(this.personasBusqueda)?this.personasBusqueda.length:0}}</a>
                                    </div>
                                    <div id="card-element-217024" class="collapse show">
                                      <div class="card-body">
                                        <!-- Lista de personas encontradas -->
                                        <div class="row">
                                          <div class="col-md-12">
                                            <div id="card-14272">
                                                
                                              <div v-for="(personita, index) in personasBusqueda" :key="personita" class="card mb-3">
                                                <div class="card-header">
                                                  <a class="card-link" data-toggle="collapse" data-parent="#card-14283" :href="`#card-persona-`+index">{{ index+1 }}. <strong>{{ "DNI: " + personita.DNI+ " - ID: " + personita.id}}</strong>  </a>
                                                </div>
                                                <div :id="`card-persona-`+index" class="collapse">
                                                  <div class="list-group">
                                                    <button type="button" class="list-group-item list-group-item-action active" @click="selectUsuarioPersona(personita.id)">Crear Usuario {{ personita.nombre + " " + personita.apellidoPaterno + " " + personita.apellidoMaterno }}</button>
                                                    <button type="text" class="list-group-item list-group-item-action" disabled>ID: <strong>{{personita.id}}</strong></button>
                                                    <button type="text" class="list-group-item list-group-item-action" disabled>Nombre: <strong>{{ personita.nombre }}</strong></button>
                                                    <button type="text" class="list-group-item list-group-item-action" disabled>Apellido Paterno: <strong>{{ personita.apellidoPaterno }}</strong></button>
                                                    <button type="text" class="list-group-item list-group-item-action" disabled>Apellido Materno: <strong>{{ personita.apellidoMaterno }}</strong></button>
                                                    <button type="text" class="list-group-item list-group-item-action" disabled>DNI: <strong>{{ personita.DNI }}</strong></button>
                                                    <button type="text" class="list-group-item list-group-item-action" disabled>Fecha de Nacimiento: <strong>{{ personita.fechaDeNacimiento }}</strong></button>
                                                    <button type="text" class="list-group-item list-group-item-action" disabled>Genero: <strong>{{ personita.genero }}</strong></button>
                                                  </div>
                                                </div>
                                              </div>


                                            </div>
                                          </div>
                                        </div>
                                        <!-- Fin de la lista de personas -->
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>


                            <!-- FIN MOSOTRAR PERSONAS -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <h4 v-if="personaCrearUser" class="mt-4 text-center">Creando usuario para {{personaCrearUser.nombre + " " + personaCrearUser.apellidoPaterno + " " + personaCrearUser.apellidoMaterno}}</h4>    
                  
                  <form
                    class="mt-4"
                    @submit.prevent="this.crearUsuarioPersona()"
                  >
                    <div class="form-group row">
                      <label for="nombrePersona" class="col-sm-2 col-form-label"
                        >Persona ID: </label
                      >
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          id="nombrePersona"
                          placeholder="0"
                          disabled
                          v-model="usuario.PersonaID"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="apellidoPaterno"
                        class="col-sm-2 col-form-label"
                        >Nombre de Usuario</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          id="apellidoPaterno"
                          placeholder="Faraon"
                          v-model="usuario.UserName"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="apellidoMaterno"
                        class="col-sm-2 col-form-label"
                        >Email</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          id="apellidoMaterno"
                          placeholder="loveshady@upeu.edu.pe"
                          v-model="usuario.Email"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="apellidoMaterno"
                        class="col-sm-2 col-form-label"
                        >Contraseña</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          id="apellidoMaterno"
                          placeholder="123456#UPeU"
                          v-model="usuario.Password"
                        />
                      </div>
                    </div>
                    <div class="form-group row ">
                      <div class="col-sm-12 mt-1">
                        <button type="submit" class="col-sm-6 btn btn-primary">
                          Guardar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import axios from "axios";
import {mapGetters, mapActions} from 'vuex';
export default {
  props: ["titulo"],
  data() {
    return {
      personasBusqueda:[],//Contiene todos los usarios
      // persona:"",//temp por el error que sale
      buscarPersonaPor: "ID", //Valor que guarda la selccion
      actualizar: false,//Si se actualiza al usario o se crea
      busquedaPersonaText: "",//Permtie que conservar el valor que se da en la busqueda
      personaCrearUser: "", //Permite gurar a la persona que se selecciono
      usuario: { PersonaID: 0, UserName: '', Email: '', Password: ''},
      listaUsuarios : [],
    };
  },
  methods:{
    regresarListaUsuarios(){
      this.$router.push({name: "ListarUsuario"})
    },
    buscarPersona(){
      let rutaApi = null
      let id = false;
      if (this.buscarPersonaPor === "ID") {
        id = true;
        rutaApi = "/persona/id/"+this.busquedaPersonaText
      } else if (this.buscarPersonaPor === 'DNI') {
        rutaApi = "/persona/dni/"+this.busquedaPersonaText
      } else if (this.buscarPersonaPor === 'NOMBRE') {
        rutaApi = "/persona/name/"+this.busquedaPersonaText
      } else if (this.buscarPersonaPor === 'APELLIDO PATERNO') {
        rutaApi = "/persona/paterno/"+this.busquedaPersonaText
      } else if (this.buscarPersonaPor === 'APELLIDO MATERNO') {
        rutaApi = "/persona/materno/"+this.busquedaPersonaText
      }
      if (rutaApi && this.busquedaPersonaText){
        let config = {
          headers: {
            Authorization:  "Bearer"+this.getToken    
          }
        }
        this.axios.get(rutaApi, config)
        .then(res =>{
          if (id){
            this.personasBusqueda = new Array(res.data);
          }else {
            this.personasBusqueda = res.data;
          }
        })
        .catch(e =>{
          this.mensajeSuperiorMini("error",e.response.data)
          // console.log(e.response.data)
        })
      }
    },
    crearUsuarioPersona(){
        this.mostrarListadoUsuario()
        let usuarioExis = this.listaUsuarios.find(usuario => (usuario.id === this.personaCrearUser.id)?usuario:null)
        if(!usuarioExis){
          console.log(this.usuario)
          let config = {
            headers: {
              Authorization:  "Bearer"+this.getToken    
            }
          }
          this.axios.post("/usuario/register", this.usuario, config )
          .then(res =>{
            this.mensajeForms('success',"Registrado", res.data.mensaje)
            this.$router.push({name: "ListarUsuario"})
          })
          .catch(e =>{
            this.mensajeForms('error',"No registrado", e.response.data)
          })

        }else {
          this.mensajeForms('error',"Usuario Existe", "Este usuario ya fue creado")
        }
    },

    selectUsuarioPersona(personaID){
      let persona = this.personasBusqueda.find(persona => (persona.id === personaID)?persona:null);
      this.personasBusqueda = new Array(persona);
      this.personaCrearUser = persona
      this.usuario.PersonaID = persona.id
      this.mostrarListadoUsuario();
    },
    mostrarListadoUsuario() {
      let config = {
        headers: {
          Authorization:  "Bearer" + this.getToken    
        }
      }
      this.axios.get("/usuario/allUsuario", config)
      .then(res =>{
        this.listaUsuarios = res.data;
      })
      .catch(e =>{
        this.mensajeSuperiorMini("error",e.response.data)
      })
    },
    mensajeForms(iconMsg, title, mensajetStr){
      Swal.fire(
        title,
        mensajetStr,
        iconMsg
      )
    },
    mensajeSuperiorMini(iconMsg, mensajetStr){
      Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
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
  computed: {
    ...mapGetters(['getToken']),
  },
};
</script>
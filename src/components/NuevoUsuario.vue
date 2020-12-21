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
                    @click="listarUsuario()"
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
                          <a class="card-link collapsed" data-toggle="collapse" data-parent="#card-725447" href="#card-element-652623">Buscar Persona</a>
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
                                <input v-model="busquedaPersonaText" type="text" class="form-control" id="inputPassword2" :placeholder="'INGRESE EL '+ buscarPersonaPor">
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
                                      <a class="card-link" data-toggle="collapse" data-parent="#card-14272" href="#card-element-217024">Personas Encontradas {{this.personasBusqueda.length}}</a>
                                    </div>
                                    <div id="card-element-217024" class="collapse show">
                                      <div class="card-body">
                                        <!-- Lista de personas encontradas -->
                                        <div class="row">
                                          <div class="col-md-12">
                                            <div id="card-14272">
                                                
                                              <div v-for="(personita, index) in personasBusqueda" :key="personita" class="card">
                                                <div class="card-header">
                                                  <a class="card-link" data-toggle="collapse" data-parent="#card-14283" :href="`#card-persona-`+index">{{ index+1 }}. <strong>{{ "DNI: " + personita.DNI+ " - ID: " + personita.id}}</strong>  </a>
                                                </div>
                                                <div :id="`card-persona-`+index" class="collapse">
                                                  <div class="card-body">
                                                    otro
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






                  
                  
                  <form
                    class="mt-4"
                    @submit.prevent="this.estadoActualizarCrear()"
                  >
                    <div class="form-group row">
                      <label for="nombrePersona" class="col-sm-2 col-form-label"
                        >Nombres</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          id="nombrePersona"
                          placeholder="Faraon"
                          v-model="persona.Nombre"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="apellidoPaterno"
                        class="col-sm-2 col-form-label"
                        >Apellido Paterno</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          id="apellidoPaterno"
                          placeholder="Love"
                          v-model="persona.ApellidoPat"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="apellidoMaterno"
                        class="col-sm-2 col-form-label"
                        >Apellido Materno</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          id="apellidoMaterno"
                          placeholder="Shady"
                          v-model="persona.ApellidoMat"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="apellidoMaterno"
                        class="col-sm-2 col-form-label"
                        >DNI</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          id="apellidoMaterno"
                          placeholder="01010101"
                          v-model="persona.Dni"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="apellidoMaterno"
                        class="col-sm-2 col-form-label"
                        >Fecha de Nacimiento</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          id="apellidoMaterno"
                          placeholder="AAAA-MM-DD"
                          v-model="persona.FechaNac"
                        />
                      </div>
                    </div>
                    <fieldset class="form-group">
                      <div class="row">
                        <legend class="col-form-label col-sm-2 pt-0">
                          Genero
                        </legend>
                        <div class="col-sm-10">
                          <div class="row">
                            <div class="form-check col-sm-4">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios1"
                                value="M"
                                v-model="persona.Genero"
                              />
                              <label class="form-check-label" for="gridRadios1">
                                Masculino
                              </label>
                            </div>
                            <div class="form-check col-sm-4">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios2"
                                value="F"
                                v-model="persona.Genero"
                              />
                              <label class="form-check-label" for="gridRadios2">
                                Femenino
                              </label>
                            </div>
                            <div class="form-check col-sm-4">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios2"
                                value="O"
                                v-model="this.persona.Genero"
                              />
                              <label class="form-check-label" for="gridRadios2">
                                Otro
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <div class="form-group row">
                      <div class="col-sm-12">
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
      personasBusqueda:[],
      persona:"",
      buscarPersonaPor: "ID",
      actualizar: false,
      busquedaPersonaText: ""
    };
  },
  methods:{
    buscarPersona(){
      let rutaApi = null
      if (this.buscarPersonaPor === "ID") {
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
          this.personasBusqueda = res.data;
          console.log(this.personasBusqueda)
        })
        .catch(e =>{
          console.log(e.response.data)
        })
      }
    }
  },
  computed: {
    ...mapGetters(['getToken']),
  },
};
</script>
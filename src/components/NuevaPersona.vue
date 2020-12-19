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
                    <a href="/">Home</a>
                  </li>
                  <li class="nav-item">
                    <a href="/cursos">Cursos</a>
                  </li>
                  <li class="nav-item">
                    <a href="/Persona">Persona</a>
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
              <h2>Crear Persona</h2>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Crear Persona
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
                <router-link
                  to="/cursosadmin/adduaform"
                  class="nav-link text-light"
                >
                  <!--  <div class="button">
                    <a href="#" class="main-btn">Añadir Sucursal</a>
                  </div>-->
                </router-link>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="corses-singel-left">
                <div class="container">
                  <h2 v-if="actualizar">
                    Actualizar <strong>{{ id_persona_url }}</strong>
                  </h2>
                  <h2 v-else>Crear Persona</h2>
                  <hr class="divider my-4" />
                  <button
                    type="button"
                    class="btn btn-primary mb-2 col-sm-2 mt-1"
                    @click="listarPersona()"
                  >
                    ATRAS
                  </button>
                  <form
                    class="mt-4"
                    @submit.prevent="crearPersona()"
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
                          placeholder="Jose Juanito"
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
                          placeholder="Simoni"
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
                          placeholder="Simoni"
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
import {mapGetters} from 'vuex';
export default {
  name: "NuevaPersonaComponent",
  props: ["titulo"],
  data() {
    return {
      persona: {
        Nombre: "",
        ApellidoPat: "",
        ApellidoMat: "",
        Genero: "M",
        Dni: "",
        FechaNac: "",
      },
      id_persona_url: null,
      actualizar: false,
    };
  },
  mounted() {
    if (this.$route.params.id) {
      this.id_persona_url = this.$route.params.id;
      this.actualizar = true;
      this.obtenerPersona();
    } else {
      this.actualizar = false;
    }
  },
  methods: {
    listarPersona() {
      this.$router.push({ name: "ListarPersona" });
    },
    crearPersona() {//Metodo para registrar una persona
      //Creando el Bearer Token
      let config = {
        headers: {
          Authorization:  "Bearer" + this.getToken    
        }
      }
      this.axios.post("/persona/insert", this.persona, config)
      .then(res =>{
        this.mensajeForms("success", "Registrado",res.data.mensaje)
        this.$router.push({ name: "ListarPersona" });
      })
      .catch(e =>{
        this.mensajeForms('error',"No registrado", e.response.data)
        // this.mensajeForms("error", "No registrado", res.response.data)
        // console.log(e.response.data)
      })
    },
    mensajeForms(iconMsg, title, mensajetStr){
      Swal.fire(
        title,
        mensajetStr,
        iconMsg
      )
    }
  },
  computed: {
    ...mapGetters(['getToken']),
  },
};
</script>
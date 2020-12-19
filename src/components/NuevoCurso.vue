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
              <h2>Crear Curso</h2>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Crear Curso
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
                    Actualizar <strong>{{ id_persona_url }}</strong>
                  </h2>
                  <h2 v-else>Crear Curso</h2>
                  <hr class="divider my-4" />
                  <button
                    type="button"
                    class="btn btn-primary mb-2 col-sm-2 mt-1"
                    @click="retrocederCursoAdmin()"
                  >
                    ATRAS
                  </button>
                  <form @submit.prevent="registrarCurso()" class="mt-4" >
                    <div class="form-group row">
                      <label for="nombreCurso" class="col-sm-2 col-form-label"
                        >Nombre</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          id="nombre"
                          placeholder="Nombre del Curso"
                          v-model="curso.Nombre"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="apellidoPaterno"
                        class="col-sm-2 col-form-label"
                        >Detalle</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          id="Detalle"
                          placeholder="Detalle"
                          v-model="curso.Detalle"
                        />
                      </div>
                    </div>
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
import {mapGetters} from 'vuex'
import axios from "axios";
import Swal from 'sweetalert2';
export default {
  name: "NuevaPersonaComponent",
  props: ["titulo"],
  data() {
    return {
      curso: { Nombre: "", Detalle: "",
      },
      // id_persona_url: null,
      // actualizar: false,
    };
  },
  // mounted() {
  //   if (this.$route.params.id) {
  //     this.id_persona_url = this.$route.params.id;
  //     this.actualizar = true;
  //     this.obtenerCurso();
  //   } else {
  //     this.actualizar = false;
  //   }
  // },
  methods: {
    retrocederCursoAdmin() {
      this.$router.push({ name: "CursosAdmin" });
    },
    registrarCurso(){
      let config = {
        headers: {
          Authorization:  "Bearer"+this.getToken    
        }
      }
      this.axios.post("/curso/registrar", this.curso, config )
      .then(res =>{
        console.log(res.data.mensaje)
        this.$router.push({name: "CursosAdmin"})
        this.mensajeForms('success',"Registrado", res.data.mensaje)
      })
      .catch(e =>{
        this.mensajeForms('error',"No registrado", e.response.data)
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
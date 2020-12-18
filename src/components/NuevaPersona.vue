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
                    @click="menuPrincipal()"
                  >
                    ATRAS
                  </button>
                  <form
                    class="mt-4"
                    @submit.prevent="crearOrActualizarPersona()"
                  >
                    <div class="form-group row">
                      <label for="nombrePersona" class="col-sm-2 col-form-label"
                        >Nombre Personal</label
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
                          v-model="persona.Apellido_paterno"
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
                          v-model="persona.Apellido_materno"
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
                          v-model="persona.Fecha_nacimiento"
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
                                v-model="persona.Genero"
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
import swal from "sweetalert";
import axios from "axios";
export default {
  name: "NuevaPersonaComponent",
  props: ["titulo"],
  data() {
    return {
      persona: {
        Nombre: "",
        Apellido_paterno: "",
        Apellido_materno: "",
        Genero: "M",
        Dni: "",
        Fecha_nacimiento: "",
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
    menuPrincipal() {
      this.$router.push({ name: "principal" });
    },
    obtenerPersona() {
      axios
        .get(
          "https://proyintegrador2020.herokuapp.com/v1/persona/25" +
            this.id_persona_url
        )
        .then((response) => {
          this.persona.Nombre = response.data.nombre_personal;
          this.persona.Apellido_paterno = response.data.apellido_paterno;
          this.persona.Apellido_materno = response.data.apellido_materno;
          this.persona.Dni = response.data.dni;
          this.persona.Fecha_nacimiento = response.data.fecha_nacimiento;
          this.persona.Genero = response.data.Genero;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    mensajeCrearPersona(nombre) {
      swal(
        "Creado Correctamente",
        "La persona " + nombre + " se registro en la BD",
        "success"
      );
    },
    mensajeActualizarPersona(nombre) {
      swal(
        "Actualizado Correctamente",
        "Se actualizo " + nombre + " correctamente en la BD",
        "success"
      );
    },
    mensajeErrorGuardaCambios(cadena) {
      swal("Error al guardar cambios", cadena, "error", {
        className: "red-bg",
      });
    },
    crearOrActualizarPersona() {
      if (this.actualizar) {
        this.actualizarPersona();
      } else {
        this.crearPersona();
      }
    },
    actualizarPersona() {
      axios
        .put(
          "https://proyintegrador2020.herokuapp.com/v1/persona/",
          `{
            "ID": ${this.id_persona_url},
            "Nombre": "${this.persona.Nombre}",
            "ApellidoPaterno": "${this.persona.Apellido_paterno}",
            "ApellidoMaterno": "${this.persona.Apellido_materno}",
            "Genero": "${this.persona.Genero}",
            "Dni": "${this.persona.Dni}",
            "FechaNacimiento": "${this.persona.Fecha_nacimiento}"
          }`
        )
        .then((response) => {
          console.log(response.data);
          this.mensajeActualizarPersona(
            this.persona.Nombre +
              " " +
              this.persona.Apellido_paterno +
              " " +
              this.persona.Apellido_materno
          );
          this.$router.push({ name: "principal" });
        })
        .catch((error) => {
          console.error(error);
          this.mensajeErrorGuardaCambios("No se puedo actualizar");
        });
    },
    crearPersona() {
      axios
        .post(
          "https://proyintegrador2020.herokuapp.com/v1/persona/",
          `{
        "Nombre": "${this.persona.Nombre}",
        "ApellidoPaterno": "${this.persona.Apellido_paterno}",
        "ApellidoMaterno": "${this.persona.Apellido_materno}",
        "Genero": "${this.persona.Genero}",
        "Dni": "${this.persona.Dni}",
        "FechaNacimiento": "${this.persona.Fecha_nacimiento}"
      }`
        )
        .then((response) => {
          console.log(response.data);
          this.mensajeCrearPersona(
            this.persona.Nombre +
              " " +
              this.persona.Apellido_paterno +
              " " +
              this.persona.Apellido_materno
          );
          this.$router.push({ name: "principal" });
        })
        .catch((error) => {
          console.error(error);
          this.mensajeErrorGuardaCambios("No se puedo crear a la persona");
        });
    },
  },
};
</script>
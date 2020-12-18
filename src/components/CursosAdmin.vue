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
                                      <li class="nav-item">
                      <a href="/ListarUsuario">Usuario</a>
                    </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <section id="page-banner" class="pt-105 pb-110 bg_cover" data-overlay="8">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-banner-cont">
              <h2>Cursos</h2>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Cursos
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="courses-part" class="pt-50 pb-120 gray-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="support-button d-none d-md-block">
              <router-link to="/ListarUA" class="nav-link text-light"
                ><div class="button">
                  <a href="/ListarUA" class="main-btn">Añadir unidad Academica</a>
                </div>
              </router-link>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="support-button d-none d-md-block">
              <router-link
                to="/cursosadmin/adduaform"
                class="nav-link text-light"
              >
                <div class="button">
                  <a href="#" class="main-btn">Añadir tipo unidad Academica</a>
                </div>
              </router-link>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="courses-top-search">
              <ul class="nav float-left" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="active"
                    id="courses-grid-tab"
                    data-toggle="tab"
                    href="#courses-grid"
                    role="tab"
                    aria-controls="courses-grid"
                    aria-selected="true"
                    ><i class="fa fa-th-large"></i
                  ></a>
                </li>
                <li class="nav-item">
                  <a
                    id="courses-list-tab"
                    data-toggle="tab"
                    href="#courses-list"
                    role="tab"
                    aria-controls="courses-list"
                    aria-selected="false"
                    ><i class="fa fa-th-list"></i
                  ></a>
                </li>
                <li class="nav-item">Cursos</li>
              </ul>
              <div class="courses-search float-right"></div>
            </div>
          </div>
        </div>
        <div class="row">
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
                      </router-link>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="corses-singel-left">
                      <h2 class="mt-5">Crear Curso</h2>
                      <hr class="divider my-4" />
                      <div
                        class="overflow-auto"
                        style="width: 100%; height: 250px"
                      >
                        <table
                          class="table table-striped table-dark"
                          style="width: 100%; height: 100%"
                        >
                          <thead>
                            <tr>
                              <th scope="col">id</th>
                              <th scope="col">Nombre</th>
                              <th scope="col">Detalle</th>
                              <th scope="col">IMG</th>
                              <th scope="col">Estado</th>
                              <th scope="col"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="(curso, index) in listaCursos"
                              :key="index"
                            >
                              <td>{{ curso.id }}</td>
                              <td>{{ curso.nombre_personal }}</td>
                              <td>{{ curso.apellido_paterno }}</td>
                              <td>{{ curso.apellido_materno }}</td>
                              <td>{{ curso.Genero }}</td>

                              <td
                                class="text-center"
                                @click="editarCurso(curso.id)"
                              >
                                <i
                                  class="fas fa-user-edit text-warning btn_Action"
                                ></i>
                              </td>
                              <td
                                class="text-center"
                                @click="mensajeEliminarCurso(curso.id)"
                              >
                                <i
                                  class="fas fa-user-times text-danger btn_Action"
                                ></i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <button
                        type="button"
                        class="btn btn-primary col-sm-3 mt-1"
                        @click="crearCurso()"
                      >
                        Agregar Nuevo Curso
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </section>
    <section></section>
  </div>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";
export default {
  name: "CursoAdmin",
  props: ["titulo"],
  data() {
    return {
      curso: {
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
      this.obtenerCurso();
    } else {
      this.actualizar = false;
    }
  },

  methods: {
    menuPrincipal() {
      this.$router.push({ name: "principal" });
    },
    obtenerCurso() {
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
    mensajeCrearCurso(nombre) {
      swal(
        "Creado Correctamente",
        "La persona " + nombre + " se registro en la BD",
        "success"
      );
    },
    mensajeActualizarCurso(nombre) {
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
    crearOrActualizarCurso() {
      if (this.actualizar) {
        this.actualizarCurso();
      } else {
        this.crearCurso();
      }
    },
    actualizarCurso() {
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
          this.mensajeActualizarCurso(
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
    crearCurso() {
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
          this.mensajeCrearCurso(
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

<style scoped>
#page-banner {
  background: linear-gradient(
      to bottom,
      rgba(7, 41, 77, 0.8) 0%,
      rgba(7, 41, 77, 0.8) 10%
    ),
    url("../../public/images/page-banner-2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

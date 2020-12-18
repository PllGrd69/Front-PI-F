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
              <div class="support-button d-none d-md-block">
                <router-link to="/ListarUsuario" class="nav-link text-light"
                  ><div class="button">
                    <a href="#" class="main-btn">Crear Usuario</a>
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
                <form class="form-inline" @submit.prevent="obtenerPersonas()">
                  <div class="form-group row col-sm-6">
                    <label for="inputEmail3" class="col-sm-1 col-form-label"
                      >Limit</label
                    >
                    <div class="col-sm-11">
                      <input
                        type="number"
                        class="form-control"
                        v-model="limit"
                      />
                    </div>
                  </div>
                  <div class="form-group row col-sm-6">
                    <label for="inputEmail3" class="col-sm-1 col-form-label"
                      >Offset</label
                    >
                    <div class="col-sm-11">
                      <input
                        type="number"
                        class="form-control"
                        v-model="offset"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary mb-2 col-sm-12 mt-3"
                  >
                    Buscar
                  </button>
                </form>
                <h2 class="mt-5">
                  Total de personas: <strong>{{ totalPersonas }}</strong>
                </h2>
                <hr class="divider my-4" />
                <div class="overflow-auto" style="width: 100%; height: 250px">
                  <table
                    class="table table-striped table-dark"
                    style="width: 100%; height: 100%"
                  >
                    <thead>
                      <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido Paterno</th>
                        <th scope="col">Apellido Materno</th>
                        <th scope="col">Genero</th>
                        <th scope="col">DNI</th>
                        <th scope="col">Fecha de Nacimiento</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Eliminar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(persona, index) in listaPersonas"
                        :key="index"
                      >
                        <td>{{ persona.id }}</td>
                        <td>{{ persona.nombre_personal }}</td>
                        <td>{{ persona.apellido_paterno }}</td>
                        <td>{{ persona.apellido_materno }}</td>
                        <td>{{ persona.Genero }}</td>
                        <td>{{ persona.dni }}</td>
                        <td>{{ persona.fecha_nacimiento }}</td>
                        <td
                          class="text-center"
                          @click="editarPersona(persona.id)"
                        >
                          <i
                            class="fas fa-user-edit text-warning btn_Action"
                          ></i>
                        </td>
                        <td
                          class="text-center"
                          @click="mensajeEliminarPersona(persona.id)"
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
                  @click="crearPersona()"
                >
                  Agregar nueva persona
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  name: "ListarPersonasComponent",
  data() {
    return {
      limit: 0,
      offset: 1,
      listaPersonas: [],
      totalPersonas: 0,
    };
  },
  mounted() {
    this.iniciarTablaPersonas();
  },
  methods: {
    editarPersona(cod) {
      this.$router.push({ name: "actualizarpersona", params: { id: cod } });
    },
    mensajeEliminarPersona(cod) {
      swal({
        title: "Eliminar " + cod + "?",
        text: "La eliminacion sera permanente!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          this.eliminarPersona(cod);
          swal("Eliminado correctamente :(!", {
            icon: "success",
          });
        }
      });
    },
    crearPersona() {
      this.$router.push({ name: "crearpersona", props: { titulo: "CREAR" } });
    },
    eliminarPersona(cod) {
      axios
        .delete("https://proyintegrador2020.herokuapp.com/v1/persona/" + cod)
        .then((response) => {
          if (response.data == 0) {
            swal("Error", "No se pudo actualizar", "error");
          }
          this.iniciarTablaPersonas();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    obtenerPersonas() {
      axios
        .post(
          "https://proyintegrador2020.herokuapp.com/v1/persona/paginated",
          `{
            "limit": ${this.limit},
            "offset": ${this.offset}
        }`
        )
        .then((response) => {
          this.listaPersonas = response.data.data;
          this.totalPersonas = response.data.totalRecords;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    iniciarTablaPersonas() {
      axios
        .post(
          "https://proyintegrador2020.herokuapp.com/v1/persona/paginated",
          `{
            "limit": 0,
            "offset": 1
        }`
        )
        .then((response) => {
          this.limit = response.data.totalRecords;
          this.obtenerPersonas();
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

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
                    <a href="/CursosAdmin">Cursos</a>
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
              <div class="support-button d-none d-md-block">
              </div>
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
                <h2 class="mt-5">
                  Crear Usuario
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
                        <th scope="col">Usuario</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Fotex</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(usuario, index) in listaUsuarios"
                        :key="index"
                      >
                        <td>{{ usuario.id }}</td>
                        <td>{{ usuario.UserName }}</td>
                        <td>{{ usuario.Email }}</td>
                        <td>{{ usuario.Password }}</td>
                        <td>{{ usuario.Avatar }}</td>

                        <td
                          class="text-center"
                          @click="editarUsuario(persona.id)"
                        >
                          <i
                            class="fas fa-user-edit text-warning btn_Action"
                          ></i>
                        </td>
                        <td
                          class="text-center"
                          @click="mensajeEliminarUsuario(persona.id)"
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
                  @click="crearUsuario()"
                >
                  Agregar Nuevo Usuario
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
  name: "ListarUsuarioComponent",
  data() {
    return {
      limit: 0,
      offset: 1,
      listaUsuario: [],
    };
  },
  mounted() {
    this.iniciarTablaUsuarios();
  },
  methods: {
    editarUsuario(cod) {
      this.$router.push({ name: "actualizarusuario", params: { id: cod } });
    },
    mensajeEliminarUsuario(cod) {
      swal({
        title: "Eliminar " + cod + "?",
        text: "La eliminacion sera permanente!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          this.eliminarUsuario(cod);
          swal("Eliminado correctamente :(!", {
            icon: "success",
          });
        }
      });
    },
    crearUsuario() {
      this.$router.push({ name: "crearusuario", props: { titulo: "CREAR" } });
    },
    eliminarUsuario(cod) {
      axios
        .delete("https://proyintegrador2020.herokuapp.com/v1/usuario/register" + cod)
        .then((response) => {
          if (response.data == 0) {
            swal("Error", "No se pudo actualizar", "error");
          }
          this.iniciarTablaUsuarios();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    obtenerUsuarios() {
      axios
        .post(
          "https://proyintegrador2020.herokuapp.com/v1/usuario",
          `{
            "limit": ${this.limit},
            "offset": ${this.offset}
        }`
        )
        .then((response) => {
          this.listausuario = response.data.data;
          this.totalusuario = response.data.totalRecords;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    iniciarTablaUsuarios() {
      axios
        .post(
          "https://proyintegrador2020.herokuapp.com/v1/usuarios",
          `{
            "limit": 0,
            "offset": 1
        }`
        )
        .then((response) => {
          this.limit = response.data.totalRecords;
          this.obtenerUsuarios();
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

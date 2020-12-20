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
                <form class="form-inline" @submit.prevent="cargarListaPersona()">
                  <div class="form-group row col-sm-6">
                    <label for="inputEmail3" class="col-sm-1 col-form-label"
                      >Limit</label
                    >
                    <div class="col-sm-11">
                      <input
                        type="number"
                        class="form-control"
                        v-model="paginacion.Limit"
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
                        v-model="paginacion.Offset"
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
                        <td>{{ persona.nombre }}</td>
                        <td>{{ persona.apellidoPaterno }}</td>
                        <td>{{ persona.apellidoMaterno }}</td>
                        <td>{{ persona.genero }}</td>
                        <td>{{ persona.DNI }}</td>
                        <td>{{ persona.fechaDeNacimiento.substring(0,10) }}</td>
                        <td
                          class="btn text-center"
                          @click="editarPersona(persona.id)"
                        >
                          <i
                            class="fas fa-user-edit text-warning btn_Action"
                          ></i>
                        </td>
                        <td
                          class="btntext-center"
                          @click="eliminarPersona(persona.id)"
                        >
                          <i
                            class="btn fas fa-user-times text-danger btn_Action"
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
import Swal from 'sweetalert2';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "ListarPersonasComponent",
  data() {
    return {
      paginacion: {Limit: 1, Offset: 1},
      listaPersonas: [],
      totalPersonas: 0,
      // personaEditar: "",
    };
  },
  methods: {
    ...mapActions(['actualizarPersona']),
    editarPersona(personaID){// Encontrar la persona seleccionada para ahorar la peticion al API
      let personSelec = this.listaPersonas.find(persona => {
        if (persona.id == personaID) return persona;
      } )
      this.actualizarPersona(personSelec)
      this.$router.push({name: "AddPersona"})
    },
    cargarListaPersona(){
      let config = {
        headers: {
          Authorization:  "Bearer"+this.getToken    
        }
      }
      this.paginacion.Limit = parseInt(this.paginacion.Limit) 
      this.paginacion.Offset = parseInt(this.paginacion.Offset) 
      this.axios.post("/persona/paginated", this.paginacion, config)
      .then(res =>{
        this.listaPersonas = res.data.data
        this.totalPersonas =  res.data.totalRecords
        this.paginacion.Limit = this.totalPersonas
      })
      .catch(e =>{
        console.log(e.response.data)
      })
    },
    cargarLimiteMax(){
      let config = {
        headers: {
          Authorization:  "Bearer" + this.getToken    
        }
      }
      this.axios.post("/persona/paginated", this.paginacion, config)
      .then(res =>{
        this.paginacion.Limit = res.data.totalRecords
        this.cargarListaPersona()
      })
      .catch(e =>{
        console.log(e.response.data)
      })
    },
    crearPersona(){
      this.$router.push({name: "AddPersona"});
    },
    eliminarPersona(personaID){
      /**Por si el usuario logeado se quiere eliminar */
      if (personaID == this.getUsuarioSesion._id){
        this.mensajeForms("error", "No te puede eliminar", "Estas usando el sistema")
        return;
      }
      /**Buscando a la persona de la tabla */
      let personSelec = this.listaPersonas.find(persona => {
        if (persona.id == personaID) return persona;
      });
      /**Obteniendo la autentificacio TWJ */
      let config = {
        headers: {
          Authorization:  "Bearer"+this.getToken    
        }
      }
      /* Preparando mensaje */
      Swal.fire({
        title: `Eliminar a ${personSelec.nombre} con ID: ${personSelec.id}`,
        text: `Confirme para eliminar!`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
          /**Elimando persona  */
          console.log("/persona/delete/"+personSelec.id)
          this.axios.delete("/persona/delete/"+personSelec.id, config)
          .then(res =>{
            this.mensajeForms("success", "Eliminado", "Se elimino corractemente a la persona con el ID " + res.data.codigo)
          })
          .catch(e =>{
            this.mensajeForms("error", "Error al eliminar", e.response.data)
          })
          this.cargarLimiteMax();
        }
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
  mounted() {
      this.actualizarPersona('')
      this.cargarLimiteMax();
  },
  computed: {
    ...mapGetters(['getToken','getUsuarioSesion']),
  },
};
</script>

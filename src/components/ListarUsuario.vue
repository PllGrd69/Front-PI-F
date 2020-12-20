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
                <!-- <router-link
                  to="/cursosadmin/adduaform"
                  class="nav-link text-light"
                >
                </router-link> -->
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
                        <th scope="col">Nombre usuario</th>
                        <th scope="col">Email</th>
                        <th scope="col">DNI</th>
                        <th scope="col">Estado Persona</th>
                        <th scope="col">Estado Usuario</th>
                        <th scope="col">Rol de Usuario</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Eliminar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(usuario, index) in listaUsuarios"
                        :key="index"
                      >
                        <td>{{ usuario.id }}</td>
                        <td>{{ usuario.nombreUsuario }}</td>
                        <td>{{ usuario.email }}</td>
                        <td>{{ usuario.dni }}</td>
                        <td>{{ usuario.estadoPersona }}</td>
                        <td>{{ usuario.estadoUsuario }}</td>


                          <div class="btn-group">
                            <button type="button" class="main-btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Action
                            </button>
                            <div class="dropdown-menu ">
                              <a v-for="(rol, index) in usuario.rol" :key="rol" class="dropdown-item disabled" href="#">{{ index+1 }} {{ rol.nombre }}</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" @click="agregarRolUsuarioMsg(usuario.id)">AGREGAR ROL</a>
                              <a class="dropdown-item" @click="eliminarRolUsuarioMsg(usuario.id)">ELIMINAR ROL</a>
                            </div>
                          </div>

                         <td
                          class="text-center"
                          @click="editarUsuario(persona.id)"
                        >
                          <i
                            class="btn fas fa-user-edit text-warning btn_Action"
                          ></i>
                        </td> 
                         <td
                          class="text-center"
                          @click="eliminarRolUsuario(persona.id)"
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
                  @click="agregarUsuario()"
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
import Swal from "sweetalert2";
import {mapGetters} from 'vuex';
export default {
  name: "ListarUsuarioComponent",
  data() {
    return {
      listaUsuarios: [],
      todosLosRoles: "",
    };
  },
  mounted() {
    this.iniciarTablaUsuarios();
  },
  methods: {
    agregarUsuario(){
      this.$router.push({name :"AddUsuario"})
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
        console.log(e.response.data)
      })
    },
    obtenerTodosLosRoles(){
      let config = {
        headers: {
          Authorization:  "Bearer" + this.getToken    
        }
      }
      this.axios.get("/rol/allRoles", config)
      .then(res =>{
        this.todosLosRoles = res.data;
      })
      .catch(e =>{
        console.log(e.response.data)
      })
    },
    eliminarRolUsuario(personaID, rolID){
      let config = {
        headers: {
          Authorization:  "Bearer" + this.getToken    
        }
      }
      this.axios.delete(`/rolUsuario/eliminar/${personaID}/${rolID}`, config)
      .then(res =>{
        
        this.mensajeForms("success", "Eliminado", "Se elimino corractemente a la persona con el ID " + res.data.codigo)
        this.mostrarListadoUsuario();
      })
      .catch(e =>{
        this.mensajeForms("error", "Error al eliminar", e.response.data)
      })
    },
    eliminarRolUsuarioMsg(personaID){
      this.mostrarListadoUsuario();
      // console.log("Eliminar usuario ", personaID)
      var roles = [];
      this.listaUsuarios.find(persona => persona.id == personaID).rol.forEach(rol => roles[rol.nombre] = rol.nombre )

      Swal.fire({
        title: 'Eliminar ROL',
        input: 'select',
        inputOptions: roles,
        inputPlaceholder: 'Seleccione un ROL',
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            this.obtenerTodosLosRoles();
            let result = this.todosLosRoles.find(rol => rol.nombre == value)//Validar la seleccion del user
            if (result) {
              this.eliminarRolUsuario(personaID, result.id);
              resolve()
            } else {
              resolve('Seleccione un rol para eliminar')
            } 
          })
        }
      })

    },
    asijnarRolAlUsuario(personaID, rolID){
      var rolUsuario = {RolID: rolID, PersonaID: personaID}
      let config = {
        headers: {
          Authorization:  "Bearer" + this.getToken    
        }
      }
      console.log(rolUsuario)
      this.axios.post("/rolUsuario/registrar",rolUsuario, config)
      .then(res =>{
        this.mostrarListadoUsuario();
        this.mensajeForms("success", "Se asijno el rol al usuario", res.data.mensaje)
      })
      .catch(e =>{
        this.mensajeForms("error", "No se asijno el rol al usuario", res.data)
      })
      
    },
    agregarRolUsuarioMsg(personaID){
      /**Actualizr usuario y su rol, porsi los datos se actualizan */
      this.mostrarListadoUsuario();
      var roles = [];//Guarda los roles segun requira tener el usuario
      /**Verificando de que no tenga el mismo rol  */
      let rol = this.todosLosRoles.forEach(rol => {//API STREAM
        let userRol = this.listaUsuarios.find(usuario => {
          if (usuario.id == personaID){
            return usuario.rol.find(rolUser => rolUser.nombre == rol.nombre)
          }
        })
        if (!userRol){
          roles[rol.nombre] = rol.nombre
        }
      });

      Swal.fire({
        title: 'Creando ROL',
        input: 'select',
        inputOptions: roles,
        inputPlaceholder: 'Seleccione un ROL',
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            this.obtenerTodosLosRoles();
            let result = this.todosLosRoles.find(rol => rol.nombre == value)//Validar la seleccion del user
            if (result) {
              this.asijnarRolAlUsuario(personaID, result.id);
              resolve()
            } else {
              resolve('Seleccione un ROL para el Usuario')
            } 
          })
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
  mounted(){
    this.mostrarListadoUsuario();
    this.obtenerTodosLosRoles();
  },
  computed: {
    ...mapGetters(['getToken']),
  }
};
</script>

<style>
  a {
    cursor: pointer;
  }
</style>
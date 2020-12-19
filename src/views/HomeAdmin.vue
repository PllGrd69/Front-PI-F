<template>
  <div class="home">
    <header id="header-part">
      <div class="header-top d-none d-lg-block">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="header-contact text-lg-left text-center">
                <ul>
                  <li>
                    <i class="fas fa-map-marked-alt"></i
                    ><span>Juliaca - En tu corazon</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="header-opening-time text-lg-right text-center">
                <p>Proxima clase 5 horas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-logo-support pt-30 pb-30">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-5">
              <div class="logo">
                <a href="/">
                  <img
                    src="../../public/visual.png"
                    alt="logo"
                    class="d-inline"
                    id="LogoBE"
                  />
                  <h1 class="d-inline">LMS-BookEye</h1>
                </a>
              </div>
            </div>
            <div class="col-lg-7 col-md-7">
              <div class="support-button float-right d-none d-md-block">
                <div class="button float-left">
                  <a href="Login" v-if="!estaActivo" class="main-btn">Login</a>
                  <a href="Login" v-if="estaActivo"  class="main-btn" @click="cerrarSesion()">Cerrar Sesión</a>
                </div>
                <div class="btn-group ms-3" v-if="estaActivo">
                  <button type="button" class="btn btn-secondary dropdown-toggle main-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{ this.rolUsuarioEstado }}
                  </button>
                  <div class="dropdown-menu dropdown-menu-right ">
                      <button class="dropdown-item main-btn" type="button" v-for="rol in this.rolesUsuario.rol" :key="rol" @click="cambiarRol(rol)"> {{ rol }} </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- NavBar-->
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
    </header>

    <!-- Announce -->
    <section>
      <div
        class="single-slider bg_cover pt-150 bgslid"
        data-overlay="4"
        style="background-image: url(images/slider/s-1.jpg)"
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-7 col-lg-9">
              <div class="slider-cont">
                <h1 data-animation="bounceInLeft" data-delay="1s">
                  Inscripción para Cursos Extraprogramaticos
                </h1>
                <p data-animation="fadeInUp" data-delay="1.3s">
                  Donec vitae sapien ut libearo venenatis faucibus. Nullam quis
                  ante. Etiam sit amet orci eget eros faucibus tincidunt Sed
                  fringilla mauri amet nibh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- Cuadro De Direccion -->
  <section id="category-part">
    <div class="container mt-25">
      <div class="category pt-10 pb-20">
        <div class="row">
          <div class="col-lg-4">
            <div class="category-text pt-50">
              <h2>Crear Cursos</h2>
            </div>
          </div>
          <!-- Nombre barra-->
          <div
            class="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-8 offset-2"
          >
            <div class="row">
              <div class="col-lg-4 mt-10">
                <a href="CursosAdmin">
                  <span class="singel-category text-center color-1">
                    <span class="icon">
                      <i class="fas fa-plus"></i>
                    </span>
                    <span class="cont">
                      <span> Agregar Cursos </span>
                    </span>
                  </span>
                </a>
              </div>
              <div class="col-lg-4 mt-10">
                <a href="ListarUsuario">
                  <span class="singel-category text-center color-2">
                    <span class="icon">
                      <i class="fas fa-plus"></i>
                    </span>
                    <span class="cont">
                      <span>Agregar Ususario</span>
                    </span>
                  </span>
                </a>
              </div>
              <div class="col-lg-4 mt-10">
                <a href="/Persona">
                  <span class="singel-category text-center color-3">
                    <span class="icon">
                      <i class="fas fa-plus"></i>
                    </span>
                    <span class="cont">
                      <span>Agregar Persona</span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeAdmin",
  components: {
  },
  methods: {
    ...mapActions(['cerrarSesion','cambiarRol']),
    mostrarInfor(){
      console.log(this.tipoUsuario.rol);
    }
  },
  computed: {
<<<<<<< HEAD
    ...mapGetters(['estaActivo']),
    ...mapGetters(['tipoUsuario'])
  }
=======
    ...mapGetters(['estaActivo', 'rolesUsuario','rolUsuarioEstado']),
  },
  components: {},
>>>>>>> c3b648a3e06ac3d365a72e2f8a527ae1023d41a3
};
</script>

<style >
.single-slider {
  height: 60vh;
}
#LogoBE {
  width: 65px;
}
</style>

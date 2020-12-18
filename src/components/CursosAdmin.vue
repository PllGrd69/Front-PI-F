<template>
  <div>
    <section id="page-banner" class="pt-105 pb-110 bg_cover" data-overlay="8">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-banner-cont">
              <h2>Cursos</h2>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="HomeAdmin.html">Home</a>
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
              <div class="courses-search float-right">
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="support-button d-none d-md-block">
              <router-link to="/addua" class="nav-link text-light"
                ><div class="button">
                  <a href="#" class="main-btn">Añadir unidad Academica</a>
                </div>
              </router-link>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="support-button d-none d-md-block">
              <router-link
                to="/cursosadmin/adduaform"
                class="nav-link text-light">
                <div class="button">
                  <a href="#" class="main-btn"
                    >Añadir tipo 
                    unidad Academica</a
                  >
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section></section>
  </div>
</template>

<script>
</script>

<style scoped>
#page-banner {
  background: linear-gradient(
      to bottom,
      rgba(7, 41, 77, 0.8) 0%,
      rgba(7, 41, 77, 0.8) 10%
    ),
    url('../../public/images/page-banner-2.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<template>
<div>
   <section id="page-banner" class="pt-105 pb-110 bg_cover" data-overlay="8" style="background-image: url(images/page-banner-2.jpg)">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-banner-cont">
                        <h2>Nombre del Curso</h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Cursos</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Nombre del Curso</li>
                            </ol>
                        </nav>
                    </div>  
                </div>
            </div>
        </div> 
    </section>
        <section id="corses-singel" class="pt-90 pb-120 gray-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="corses-singel-left mt-30">
                        <div class="title">
                            <h3>Nombre del Curso</h3>
                        </div> <!-- title -->
                        <div class="course-terms">
                            <ul>
                                <li>
                                    <div class="teacher-name">
                                        <div class="name">
                                            <span>Docente</span>
                                            <h6>Nombre del profe</h6>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="course-category">
                                        <span>Categoria</span>
                                        <h6>Esta parte si quieres la borras </h6>
                                    </div>
                                </li>
                            </ul>
                        </div> <!-- course terms -->
                        
                        <div class="corses-tab mt-30">
                            <!--Inicio de parte de las sesiones -->
                            <ul class="nav nav-justified" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="active" id="Sesion1-tab" data-toggle="tab" href="#Sesion1" role="tab" aria-controls="Sesion1" aria-selected="true">Sesion 1</a>
                                </li>
                                <li class="nav-item">
                                    <a id="Sesion2-tab" data-toggle="tab" href="#Sesion2" role="tab" aria-controls="Sesion2" aria-selected="false">Sesion 2</a>
                                </li>
                                <li class="nav-item">
                                    <a id="Sesion3-tab" data-toggle="tab" href="#Sesion3" role="tab" aria-controls="Sesion3" aria-selected="false">Sesion 3</a>
                                </li>
                                <li class="nav-item">
                                    <a id="Sesion4-tab" data-toggle="tab" href="#Sesion4" role="tab" aria-controls="Sesion4" aria-selected="false">Sesion 4</a>
                                </li>
                            </ul>
                            <!--El div tab-content es el inicio de los cuados de las sesiones-->
                            <div class="tab-content" id="myTabContent">
                                <!--En el div en el corses tab de arriba estan los identificadores para ver los visualizadores, donde el href llama abajo a los id.pipipip por el momento solo el 1 funciona-->
                                <!--Dentro de cada 1 puede funcionar un crud -->
                                <div class="tab-pane fade show active" id="Sesion1" role="tabpanel" aria-labelledby="Sesion1-tab">
                                    <div class="curriculam-cont">
                                        <div class="title">
                                            <h6>Nombre de la sesion</h6>
                                        </div>
                                        <!-- Inicio de la parte desplegable-->
                                        <div class="accordion" id="accordionExample">
                                            <!-- Cada Card es un desplegable -->
                                            <div class="card">
                                                <div class="card-header" id="headingOne">
                                                    <a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        <ul>
                                                            <li><i class="fa fa-file-o"></i></li>
                                                            <li><span class="lecture">Recurso 1.1</span></li>
                                                            <li><span class="head">Instalacion de vue</span></li>
                                                            <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span> Tema 1</span></span></li>
                                                        </ul>
                                                    </a>
                                                </div>

                                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--Fin de una card-->
                                            
                                            <div class="card">
                                                <div class="card-header" id="headingTow">
                                                    <a href="#" data-toggle="collapse" class="collapsed" data-target="#collapseTow" aria-expanded="true" aria-controls="collapseTow">
                                                        <ul>
                                                            <li><i class="fa fa-file-o"></i></li>
                                                            <li><span class="lecture">Recurso 1.2</span></li>
                                                            <li><span class="head">Instalacion de Vuex</span></li>
                                                            <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span> Tema 2</span></span></li>
                                                        </ul>
                                                    </a>
                                                </div>

                                                <div id="collapseTow" class="collapse" aria-labelledby="headingTow" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="card">
                                                <div class="card-header" id="headingThree">
                                                    <a href="#" data-toggle="collapse" class="collapsed" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        <ul>
                                                            <li><i class="fa fa-file-o"></i></li>
                                                            <li><span class="lecture">Recurso 1.3</span></li>
                                                            <li><span class="head">Como no desaprobar</span></li>
                                                            <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span>Tema 3</span></span></li>
                                                        </ul>
                                                    </a>
                                                </div>
                                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> <!-- curriculam cont -->
                                </div>
                                <!--Sesion2-->
                                <div class="tab-pane fade" id="Sesion2" role="tabpanel" aria-labelledby="Sesion2-tab">
                                    <div class="curriculam-cont">
                                        <div class="title">
                                            <h6>Nombre de la sesion</h6>
                                        </div>
                                        <!-- Inicio de la parte desplegable-->
                                        <div class="accordion" id="accordionExample">
                                            <!-- Cada Card es un desplegable -->
                                            <div class="card">
                                                <div class="card-header" id="headingOne">
                                                    <a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        <ul>
                                                            <li><i class="fa fa-file-o"></i></li>
                                                            <li><span class="lecture">Recurso 1.1</span></li>
                                                            <li><span class="head">Instalacion de vue</span></li>
                                                            <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span> Tema 1</span></span></li>
                                                        </ul>
                                                    </a>
                                                </div>

                                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--Fin de una card-->
                                            
                                            <div class="card">
                                                <div class="card-header" id="headingTow">
                                                    <a href="#" data-toggle="collapse" class="collapsed" data-target="#collapseTow" aria-expanded="true" aria-controls="collapseTow">
                                                        <ul>
                                                            <li><i class="fa fa-file-o"></i></li>
                                                            <li><span class="lecture">Recurso 1.2</span></li>
                                                            <li><span class="head">Instalacion de Vuex</span></li>
                                                            <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span> Tema 2</span></span></li>
                                                        </ul>
                                                    </a>
                                                </div>

                                                <div id="collapseTow" class="collapse" aria-labelledby="headingTow" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="card">
                                                <div class="card-header" id="headingThree">
                                                    <a href="#" data-toggle="collapse" class="collapsed" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        <ul>
                                                            <li><i class="fa fa-file-o"></i></li>
                                                            <li><span class="lecture">Recurso 1.3</span></li>
                                                            <li><span class="head">Como no desaprobar</span></li>
                                                            <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span>Tema 3</span></span></li>
                                                        </ul>
                                                    </a>
                                                </div>
                                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> <!-- curriculam cont -->
                                </div>
                                <!--Sesion 3-->
                                <div class="tab-pane fade" id="Sesion3" role="tabpanel" aria-labelledby="Sesion3-tab">
                                    <div class="curriculam-cont">

                                            <div class="title">
                                                <h6>Nombre de la sesion</h6>
                                            </div>
                                            <!-- Inicio de la parte desplegable-->
                                            <div class="accordion" id="accordionExample">
                                                <!-- Cada Card es un desplegable -->
                                                <div class="card">
                                                    <div class="card-header" id="headingOne">
                                                        <a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <ul>
                                                                <li><i class="fa fa-file-o"></i></li>
                                                                <li><span class="lecture">Recurso 1.1</span></li>
                                                                <li><span class="head">Instalacion de vue</span></li>
                                                                <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span> Tema 1</span></span></li>
                                                            </ul>
                                                        </a>
                                                    </div>
    
                                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div class="card-body">
                                                            <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--Fin de una card-->
                                                
                                                <div class="card">
                                                    <div class="card-header" id="headingTow">
                                                        <a href="#" data-toggle="collapse" class="collapsed" data-target="#collapseTow" aria-expanded="true" aria-controls="collapseTow">
                                                            <ul>
                                                                <li><i class="fa fa-file-o"></i></li>
                                                                <li><span class="lecture">Recurso 1.2</span></li>
                                                                <li><span class="head">Instalacion de Vuex</span></li>
                                                                <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span> Tema 2</span></span></li>
                                                            </ul>
                                                        </a>
                                                    </div>
    
                                                    <div id="collapseTow" class="collapse" aria-labelledby="headingTow" data-parent="#accordionExample">
                                                        <div class="card-body">
                                                            <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <div class="card">
                                                    <div class="card-header" id="headingThree">
                                                        <a href="#" data-toggle="collapse" class="collapsed" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            <ul>
                                                                <li><i class="fa fa-file-o"></i></li>
                                                                <li><span class="lecture">Recurso 1.3</span></li>
                                                                <li><span class="head">Como no desaprobar</span></li>
                                                                <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span>Tema 3</span></span></li>
                                                            </ul>
                                                        </a>
                                                    </div>
                                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                        <div class="card-body">
                                                            <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

    
                                    </div> <!-- instructor cont -->
                                </div>
                                <!--Sesion4-->
                                <div class="tab-pane fade" id="Sesion4" role="tabpanel" aria-labelledby="Sesion4-tab">
                                    <div class="curriculam-cont">

                                            <div class="title">
                                                <h6>Nombre de la sesion</h6>
                                            </div>
                                            <!-- Inicio de la parte desplegable-->
                                            <div class="accordion" id="accordionExample">
                                                <!-- Cada Card es un desplegable -->
                                                <div class="card">
                                                    <div class="card-header" id="headingOne">
                                                        <a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <ul>
                                                                <li><i class="fa fa-file-o"></i></li>
                                                                <li><span class="lecture">Recurso 1.1</span></li>
                                                                <li><span class="head">Instalacion de vue</span></li>
                                                                <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span> Tema 1</span></span></li>
                                                            </ul>
                                                        </a>
                                                    </div>
    
                                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div class="card-body">
                                                            <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--Fin de una card-->
                                                
                                                <div class="card">
                                                    <div class="card-header" id="headingTow">
                                                        <a href="#" data-toggle="collapse" class="collapsed" data-target="#collapseTow" aria-expanded="true" aria-controls="collapseTow">
                                                            <ul>
                                                                <li><i class="fa fa-file-o"></i></li>
                                                                <li><span class="lecture">Recurso 1.2</span></li>
                                                                <li><span class="head">Instalacion de Vuex</span></li>
                                                                <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span> Tema 2</span></span></li>
                                                            </ul>
                                                        </a>
                                                    </div>
    
                                                    <div id="collapseTow" class="collapse" aria-labelledby="headingTow" data-parent="#accordionExample">
                                                        <div class="card-body">
                                                            <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <div class="card">
                                                    <div class="card-header" id="headingThree">
                                                        <a href="#" data-toggle="collapse" class="collapsed" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            <ul>
                                                                <li><i class="fa fa-file-o"></i></li>
                                                                <li><span class="lecture">Recurso 1.3</span></li>
                                                                <li><span class="head">Como no desaprobar</span></li>
                                                                <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span>Tema 3</span></span></li>
                                                            </ul>
                                                        </a>
                                                    </div>
                                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                        <div class="card-body">
                                                            <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

    
                                    </div> <!-- instructor cont -->
                                </div>
                            </div> 
                        </div>
                    </div> 
                    
                </div>
                <div class="col-lg-4">

                    <!-- Inicio de  Detalles de la Unidad-->
                    <div class="row">
                        <div class="col-lg-12 col-md-6">
                            <div class="course-features mt-30">
                               <h4>Detalles de la <br> Unidad </h4>
                                <ul>
                                    <li><i class="fa fa-clock-o"></i>Duracion : <span>10 Horas</span></li>
                                    <li><i class="fa fa-beer"></i>Tareas :  <span>03</span></li>
                                    <li><i class="fa fa-user-o"></i>Recursos :  <span>10</span></li>
                                </ul>
                            </div>
                        </div>

                            <!-- Fin de  Detalles de la Unidad-->
                        <div class="col-lg-12 col-md-6">
                            <div class="You-makelike mt-30">
                                <h4>Otras Unidades </h4> 
                                <div class="singel-makelike mt-20">
                                    <div class="image">
                                        
                                    </div>
                                    <div class="cont">
                                        <a href="#"><h4>Unidad 1</h4></a>
                                    </div>
                                </div>
                                <div class="singel-makelike mt-20">
                                    <div class="image">
                                    </div>
                                    <div class="cont">
                                        <a href="#"><h4>Unidad 2</h4></a>
                                    </div>
                                </div>
                                <div class="singel-makelike mt-20">
                                    <div class="image">
                                    </div>
                                    <div class="cont">
                                        <a href="#"><h4>Unidad 3</h4></a>
                                    </div>
                                </div>
                                <div class="singel-makelike mt-20">
                                    <div class="image">
                                    </div>
                                    <div class="cont">
                                        <a href="#"><h4>Unidad 4</h4></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- row -->
        </div>
    </section>

  </div>
</template>
  
<script>

</script>

<style>


</style>

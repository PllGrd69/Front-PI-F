<template>
<div>
<!-- PONER EL NOMBRE DEL CURSO -->
   <section id="page-banner" class="pt-105 pb-110 bg_cover" data-overlay="8" style="background-image: url(images/page-banner-2.jpg)">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-banner-cont">
                        <h2>{{this.cursoSeleccionado.nombre}}</h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Cursos</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{this.cursoSeleccionado.nombre}}</li>
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
                            <!-- poner el nombre del curs -->
                            <h3>Unidad {{this.unidad.orden}} - {{this.cursoSeleccionado.nombre}}</h3>
                            <h5 class="mb-5">{{this.unidad.nombre}}</h5>
                        </div> <!-- title -->
                        <div class="course-terms">
                            <ul>
                                <li>
                                    <div class="teacher-name">
                                        <div class="name">
                                            <span>Docente</span>
                                            <h6>{{getUsuarioSesion.nombre + " "}}</h6>
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
                        <!-- BOOTNES DE SESIONES -->
                        <div class="corses-tab mt-30">
                            <!--Inicio de parte de las sesiones -->
                            <ul class="nav nav-justified" id="myTab" role="tablist">
                                
                                <li v-for="(sesion,index) in sesionesDeUnidad" :key="index" class="nav-item">
                                    <a :class="{ active : (index == 0)?true:false}" :id="`Sesion${index+1}-tab`" data-toggle="tab" :href="`#Sesion${index+1}`" role="tab" :aria-controls="`Sesion${index+1}`" :aria-selected="{ active : (index == 0)?true:false}">Sesión {{index+1}}</a>
                                </li>
                                <li class="nav-item">
                                    <a  class="crearSesion" role="tab" data-toggle="tooltip" @click="mensajeCrearSesionAcademica()">Crear Sesión</a>
                                </li>
                                <!-- <li class="nav-item">
                                    <a id="Sesion3-tab" data-toggle="tab" href="#Sesion3" role="tab" aria-controls="Sesion3" aria-selected="false">Sesion 3</a>
                                </li>
                                <li class="nav-item">
                                    <a id="Sesion4-tab" data-toggle="tab" href="#Sesion4" role="tab" aria-controls="Sesion4" aria-selected="false">Sesion 4</a>
                                </li> -->
                            </ul>
                            <!--El div tab-content es el inicio de los cuados de las sesiones-->
                            <div class="tab-content" id="myTabContent">
                                <!--En el div en el corses tab de arriba estan los identificadores para ver los visualizadores, donde el href llama abajo a los id.pipipip por el momento solo el 1 funciona-->
                                
                                <!--Dentro de cada 1 puede funcionar un crud -->
                                <!-- SESION 1 -->
                                <div v-for="(sesion, index) in sesionesDeUnidad" :key="index"
                                class="tab-pane fade show"
                                :class="{ active : (index == 0)?true:false}"
                                :id="`Sesion${index+1}`" 
                                role="tabpanel" 
                                :aria-labelledby="`Sesion${index+1}-tab`">
                                    <div class="curriculam-cont">
                                        <div class="title">
                                            <h6>{{sesion.Nombre}}</h6>
                                        </div>
                                        <!-- Inicio de la parte desplegable-->
                                        <div class="accordion" id="accordionExample">
                                            <!-- Cada Card es un desplegable -->
                                            <div class="card">
                                                <div class="card-header" :id="`headingOne`">
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
                                
                                <div v-for="(unidad, index) in unidadesCurso " :key="index" class="singel-makelike mt-20">
                                    <div class="image">

                                    </div>
                                    <div class="cont">
                                        <a href="#" @click="obtenerSesionesDeLaUnidades(unidad.id)"><h4>Unidad {{unidad.orden }}</h4></a>
                                    </div>
                                    <div >
                                        <p><strong>{{ unidad.nombre }}</strong></p>
                                    </div>
                                </div>
                                
                                <div class="singel-makelike mt-20">
                                    <div class="image">
                                    </div>
                                    <div class="cont">
                                        <a href="#" @click="mensajeCrearUnidadAcademica()"><h4>Crear Unidad</h4></a>
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
import Swal from 'sweetalert2';
import {mapGetters} from 'vuex';
export default {
    data(){
        return {
            cursoSeleccionado: "",
            unidadesCurso: [],
            unidad:"",
            unidadSeleccionadaID: "",
            sesionesCardsIDs: [],
            sesionesDeUnidad: [],
        }
    },
    methods:{
        obtenerUnidadCurso(){
            let config = {
                headers: {
                    Authorization:  "Bearer"+this.getToken    
                }
            }
            let personaCurso = {PersonaID: this.getUsuarioSesion._id, CursoID: this.cursoSeleccionado.id}
            this.axios.post("/unidad/cursoPesonaUnidad",personaCurso, config)
            .then(res =>{ 
                this.unidadesCurso = res.data;
                this.obtenerSesionesDeLaUnidades(res.data[0].id);
            })
            .catch(e =>{
                this.mensajeSuperiorMini("error",e.response.data)
            })
        },
        obtenerCursoSeleccionado(){
            let config = {
                headers: {
                    Authorization:  "Bearer"+this.getToken    
                }
            }
            this.axios.get("/curso/id/"+"1", config)
            .then(res =>{ 
                this.cursoSeleccionado = res.data;
                this.obtenerUnidadCurso();
            })
            .catch(e =>{
            this.mensajeSuperiorMini("error",e.response.data)
            })
        },
        obtenerSesionesDeLaUnidades(unidadID){
            this.unidadSeleccionadaID = unidadID
            let config = {
                headers: {
                    Authorization:  "Bearer"+this.getToken    
                }
            }
            this.unidad = this.unidadesCurso.find(uni => (uni.id ==unidadID)?uni:null);
            this.axios.get("/sesion/unidadAcademica/"+unidadID, config)
            .then(res =>{ 
                this.sesionesDeUnidad = res.data;
                console.log(this.unidadesCurso)
            })
            .catch(e =>{
                this.mensajeSuperiorMini("error",e.response.data)
            })
        },
        mensajeSuperiorMini(iconMsg, mensajetStr){
            Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
                didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            }).fire({
                icon: iconMsg,
                title: mensajetStr
            })
        },
        mensajeCrearUnidadAcademica() {
            Swal.fire({
                title: 'Ingrese el nombre de la unidad',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Crear Unidad',
            }).then((result) => {
                if (result.isConfirmed) {
                    this.crearUnidadAcademica(result.value)
                }
            })
        },
        mensajeCrearSesionAcademica() {
            Swal.fire({
                title: 'Ingrese el nombre de la sesion',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Crear Sesión',
            }).then((result) => {
                if (result.isConfirmed) {
                    this.crearSesion(result.value)
                }
            })
        },
        crearUnidadAcademica(nombre) {
            if (this.unidadesCurso){
                let plan = this.unidadesCurso[0];
                let config = {
                    headers: {
                        Authorization:  "Bearer"+this.getToken    
                    }
                }
                let unidadAcad = {PlanCursoID : plan.planCursoID, Nombre: nombre}
                this.axios.post("/unidad/registrar", unidadAcad,config)
                .then(res =>{ 
                    this.obtenerCursoSeleccionado();
                    this.mensajeForms("success", "REGISTRADO", res.data.mensaje )
                })
                .catch(e =>{
                    this.mensajeSuperiorMini("error",e.response.data)
                })
            }
        },
        crearSesion(nombreSesion){
            let config = {
                headers: {
                    Authorization:  "Bearer"+this.getToken    
                }
            }
            let sesion = {Nombre: nombreSesion, UnidadID: this.unidadSeleccionadaID}
            this.axios.post("/sesion/registrar", sesion, config)
            .then(res =>{ 
                this.obtenerSesionesDeLaUnidades(this.unidadSeleccionadaID)
                this.mensajeForms("success", "Se registro la sesión", res.data.mensaje)
            })
            .catch(e =>{
                this.mensajeForms("error", "Error al registrar la sesión", e.response.data)
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
    created(){
        if(this.isAlumno) {//SI ES ALUMNO DENEGAR EL ACCESO
            this.$router.push({name:"Home"})
        }
        this.obtenerCursoSeleccionado();
    },
    computed: {
        ...mapGetters(['getToken','getUsuarioSesion','rolUsuarioEstado']),
        isAlumno(){
            return (this.rolUsuarioEstado == "ALUMNO")?true:false
        },
        isDocente(){
            return (this.rolUsuarioEstado === "DOCENTE")?true:false
        },
        isAdmin(){
            return (this.rolUsuarioEstado === "ADMIN")?true:false
        }
  }
}
</script>

<style >
    .crearSesion{
        cursor:pointer;
    }
    .crearSesion:hover{
        color:#F7C600;
        background: #395471;
    }
</style>
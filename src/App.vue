<template>
  <div>
<router-view />
  </div>
  

</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods:{
    ...mapActions(['leerToken'])
  },
  created(){
    this.leerToken();
  }
}
</script>

<style>
</style>

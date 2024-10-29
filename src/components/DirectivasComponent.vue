<template>
  <div>
    <h1>Directivas Component</h1>
    <!-- ! EL $ PERMITE ACCEDER A ELEMENTOS DENTRO DE VUE -> pinta todas las variables que haya en data -->
    <h1>{{$data}}</h1>
    <label>Introduzca un número</label>
    <input type="number" v-model="numero"/> <br/>
    <label>Introduzca un nombre</label>
    <input type="text" v-model="nombre"/>

    <h2 v-if="numero>0" style="color: green">POSITIVO</h2>
    <h2 v-if="numero<0" style="color: red">NEGATIVO</h2>
    <h2 v-if="numero==0" style="color: blue">CERO</h2>
    <!-- recorremos el array de series -->
    <ul v-if="series.length > 0">
      <li v-for="serie in series" :key="serie">{{serie}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DirectivasComponent",
  data(){
    return {
      series: ["Futurama", "Suits", "The Boys", "Stranger Things"],
      numero: 0,
      nombre: "Alumno",
      edad: 25
    }
  }
}
</script>

<style>

</style>
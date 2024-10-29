<template>
  <div>
    <h1>Mi primera App de Vue!</h1>
    <h2>Su nombre es {{ nombre }}</h2>
    <h3>El numero es {{ numero }}</h3>
    <img src="./../assets/images/gato.jpg" />
  </div>
</template>

<script>
  // ESTO ES CÓDIGO JS(ESPECIAL)
  //cada component creado, SIEMPRE debemos exportarlo con un name
  export default {
    name: "HolaMundo",
    data(){
      //Aqui debemos declarar las variables para el dibujo
      //Las variables son declaradas con formato JSON dentro de un return
      return {
        nombre: "Alumno",
        numero: 14,
        miArray: [],
        objeto: {}
      }
    }
  }
</script>

<style>
  h1{
    color: coral;
  }

  @import './../assets/css/estilos.css';

</style>
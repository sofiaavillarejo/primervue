<template>
  <div>
    <h1>Ciclo de vida</h1>
    <button @click="cambiarSaludo()">Cambiar Saludo</button>
    <hr/>
    <h2>{{saludo}}</h2>
  </div>
</template>

<script>
export default {
  name: "CicloVida",
  data(){
    return {
      saludo: "Hoy es lunes..."
    }
  },
  methods: {
    //EN ESTA ZONA, INCLUIRREMOS NUESTROS MÉTODOS PERSONALIZADOS
    cambiarSaludo(){
      //se usa la palabra clave -> this para llamar a las variables de data()
      this.saludo = "Y mañana martes";
    }
  },
  mounted() {
    console.log("Componente montado")
  },
  unmounted(){
    console.log("Componente destruido")

  },
  updated(){
    console.log("Componente modificado")
  },
  created(){
    console.log("Componente creado")
  }
}
</script>

<style>
  @import './../assets/css/estilos.css';
</style>
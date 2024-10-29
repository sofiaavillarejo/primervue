<template>
  <div>
    <h1>Propiedad conmutada</h1>
    <button @click="getJuegosAzul()">Cambiar Color</button>
    <div v-html="html"></div>
    <!-- !Para que funcione el de los juegos azules, hay que comentar el otro -->
    <!-- <ul>
      <li v-for="game in juegosRojos" :key="game" v-html="game"></li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "PropiedadConmutada",
  methods: {
    getJuegosAzul(){
      this.html = ""
      for (var juego of this.juegos){
        this.html += "<h4 style='color:blue'>"+juego+"</h4>";
      }
    }
  },
  computed: {
    //una propiedad conmutada SIEMPRE devuelve valores y NO puede recibir parámetros
    juegosRojos(){
      //vamos a devovler todos los juegos con el color rojo
      var datos = this.juegos;
      //recorremos cada juego y modificamos su dibujo a color rojo
      for (var i = 0; i < datos.length; i++){
        var juego = datos[i];
        juego = "<span style='color:red'>" + juego + "</span>";
        datos [i] = juego;
      }
      return datos; 
    }
  },
  data(){
    return {
      html: "",
      juegos: ["Parchis","Canicas","Luz roja, luz verde", "La cuerda", "La galleta"]
    }
  }
}
</script>

<style>

</style>
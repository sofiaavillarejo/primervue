<template>
  <div>
    <h1>Número Par o Impar</h1>
    <h2 style="color: fuchsia">
      Doble: {{ $filters.getNumeroDoble(numero) }}
    </h2>
    <label>Introduce un número</label>
    <input type="number" v-model="numero"/>

    <!--todo: CON DIRECTIVAS -->
    <hr/>
    <h2 v-if="numero%2==0" style="color: green">PAR</h2>
    <h2 v-else style="color:red">IMPAR</h2>

    <!--todo: CON MÉTODO ONCLICK  -->
    <hr/>
    <button @click="parImpar()">Calcular</button>

    <!-- todo: PROPIEDAD CONMUTADA -->
    <!-- <h2 v-if="resultado === 'PAR'" style="color: green">{{ resultado }}</h2>
    <h2 v-if="resultado === 'IMPAR'" style="color: red">{{ resultado }}</h2> -->
    <div v-html="html"></div>
    <div v-html="evaluarNumero"></div>
  </div>
</template>

<script>
export default {
  name: "NumeroParImpar",
  methods: {
    // metodo que ejecuta el btn al hacer click en el
    parImpar(){
      if(this.numero%2==0){
        // this.resultado = "PAR"
        this.html = "<h3 style='color: green'>Par "+ this.numero + "</h3>"
      } else{
        // this.resultado = "IMPAR";
        this.html = "<h3 style='color: red'>Impar "+ this.numero + "</h3>"

      }
      
    }
  },
  data(){
    return {
      numero: 0,
      // comentar esto si quiero usar propeidad conmutada
      html: ""
    }
  },
  //PROPIEDAD CONMUTADA
  computed: {
    evaluarNumero () {
      let data = "";
      if(this.numero%2 == 0){
        data = "<h3 style='color: green'>Par "+ this.numero + "</h3>";
      }else {
        data = "<h3 style='color: red'>Par "+ this.numero + "</h3>"
      }

      return data;
    }
  }
}
</script>

<style>

</style>
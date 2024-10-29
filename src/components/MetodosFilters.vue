<template>
  <div>
    <h1>Métodos Filters</h1>
    <ul>
      <li v-for="num in numeros" :key="num">Número: {{num}}, Doble: {{ $filters.getNumeroDoble(num) }}</li>
    </ul>
    <ul>
      <li v-for="name in nombres" :key="name">Nombre: {{name}}, Mayúsculas: {{ $filters.mayuscula(name)}}</li>
    </ul>
  </div>
</template>
<!-- todo: FILTER PARA PONER TEXTOS EN MAYUSCULAS -->
<!-- TODO: FILTER PARA DIBUJAR EL DOBLE DE CUALQUIER NUMERO -->
<script>
export default {
  name: "MetodosFilters",
  data(){
    return {
      nombres: ["Sofía","Jorge","Lucía", "Silvia", "Adrián"],
      numeros: [2, 6, 55, 77, 88 ,99, 102]

    }
  }
}
</script>

<style>

</style>
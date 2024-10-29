<template>
  <div>
    <ul id="menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/cine">Cine</router-link></li>
      <li><router-link to="/musica">Musica</router-link></li>
      <li><router-link to="/hooks">Ciclo vida Events</router-link></li>
      <li><router-link to="/directivas">Directivas</router-link></li>
      <li><router-link to="/conmutada">Propiedad Conmutada</router-link></li>
      <li><router-link to="/parimpar">Par / Impar</router-link></li>
      <li><router-link to="/filters">Métodos filters</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
}
</script>

<style>

</style>
<template>
  <!-- <HomeComponent/>
  <MusicaComponent/>
  <CineComponent/>
  <HolaMundo/>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  -->
  <MenuComponent/>
  <hr/>
  <!--!PONIENDO ESTO, YA NO HACE FALTA NI IMPORTAR LOS COMPONENTS, NI LLAMARLOS EN EL EXPORT -->
  <router-view/>
</template>

<script>
//importamos nuestro menu de links
import MenuComponent from './components/MenuComponent.vue';

// import CineComponent from './components/CineComponent.vue';
// import HelloWorld from './components/HelloWorld.vue'
// import HolaMundo from './components/HolaMundo.vue';
// import HomeComponent from './components/HomeComponent.vue';
// import MusicaComponent from './components/MusicaComponent.vue';

export default {
  name: 'App',
  components: {
    MenuComponent
    // HomeComponent, CineComponent, MusicaComponent
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

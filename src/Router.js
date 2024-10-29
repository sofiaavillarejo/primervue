import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CineComponent from "./components/CineComponent.vue";
import MusicaComponent from "./components/MusicaComponent.vue";
import CicloVida from "./components/CicloVida.vue";
import DirectivasComponent from "./components/DirectivasComponent.vue";
import PropiedadConmutada from "./components/PropiedadConmutada.vue";
import NumeroParImpar from "./components/NumeroParImpar.vue";
import MetodosFilters from "./components/MetodosFilters.vue";

//todo: Creamos una constante array para las rutas
const myRoutes = [
  {
    path:"/", component: HomeComponent
    
  },
  {
    path:"/musica", component: MusicaComponent
  },
  {
    path:"/cine", component: CineComponent
  },
  {
    path:"/hooks", component: CicloVida
  },
  {
    path:"/directivas", component: DirectivasComponent
  },
  {
    path:"/conmutada", component: PropiedadConmutada
  },
  {
    path:"/parimpar", component: NumeroParImpar
  },
  {
    path:"/filters", component: MetodosFilters
  }

]

//todo: Creamos una constante para el historial e incluir el array de rutas 
//todo: dicho nombre de constante será el usado dentro de Main.js
const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes
})

//todo: Por último, exportamos la constante router para ser utilziada en App
export default router;
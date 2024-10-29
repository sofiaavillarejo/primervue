import { createApp } from 'vue';
import App from './App.vue';
import router from './Router';


// createApp(App).use(router).mount('#app')

//todo: COMENZAMOS SEPARANDO NUESTRA CREACION DE APLICACION EN UNA VARIABLE
var app = createApp(App);
app.config.globalProperties.$filters = {
  //CREAMOS 2 MÉTODOS QUE RECIBIRAN PARÁMETROS Y DEVOLVERAN UN CODIGO
  mayuscula(dato){
    return dato.toUpperCase();
  },
  getNumeroDoble(num){
    return num * 2;
  }
}
app.use(router).mount('#app')

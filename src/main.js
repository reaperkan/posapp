import Vue from 'vue';
import App from './App.vue'
import VueRouter from './route/router.js'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


$(document).ready(()=>{
  console.log("active");
});

Vue.config.productionTip = false

new Vue({
  router:VueRouter,
  render: h => h(App),
}).$mount('#app')

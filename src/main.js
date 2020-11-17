import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router'
import { routes } from './routes';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2';  

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'


// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(VueSweetalert2);  

Vue.config.productionTip = false
const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router'
import { routes } from './routes';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter)

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { routes } from './routes'
import VueCalendly from 'vue-calendly';

Vue.use(VueCalendly);

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

new Vue({
  vuetify,
  router: router,
  render: h => h(App)
}).$mount('#app')
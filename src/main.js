import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import axios from 'axios';
import './index.css'

Vue.config.productionTip = false

let axiosConfig = {
   baseURL: process.env.VUE_APP_API_URL + '/api'
 };

Vue.prototype.axios = axios.create(axiosConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

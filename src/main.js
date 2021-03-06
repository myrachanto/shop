import Vue from "vue";
import axios from "axios"
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import back from "./layouts/back"

axios.defaults.baseURL = 'https://shop.nillavee.co.ke'
// axios.defaults.baseURL = 'http://localhost:3333'
Vue.config.productionTip = false;

Vue.component("mainlayout", back)
new Vue({
  router,
  store,
  vuetify,

  render: function(h) {
    return h(App);
  }
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import VueNavigationBar from "vue-navigation-bar";
Vue.component("vue-navigation-bar", VueNavigationBar);
import VModal from "vue-js-modal";
import VueAnalytics from "vue-analytics";
Vue.use(VModal);
Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: "UA-179418961-1",
  router
});

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");

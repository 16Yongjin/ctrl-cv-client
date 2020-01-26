import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "./assets/scss/app.scss";

Vue.use(Buefy, {
  defaultMonthNames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => `${i}월`)
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

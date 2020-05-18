import "./bootstrap";

import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import VueProgressBar from "vue-progressbar";
Vue.use(VueProgressBar);
import VueLoading from "vue-loading-template";
Vue.use(VueLoading, { type: "bars" });

const createApp = async () => {
  await store.dispatch("auth/currentUser");

  new Vue({
    el: "#app",
    router,
    store,
    components: { App },
    template: "<App />"
  });
};

createApp();

import "./bootstrap";

import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import VueProgressBar from "vue-progressbar";
Vue.use(VueProgressBar);

const createApp = async () => {
  await store.dispatch("auth/currentUser");

  new Vue({
    el: "#app",
    router,
    store,
    components: { App },
    template: "<App />",
    methods: {
      progressFinish() {
        if (this.$store.state.process.loading) {
          this.$Progress.finish();
          this.$store.commit("process/setLoading", false);
        }
      },
      progressStart() {
        if (!this.$store.state.process.loading) {
          this.$Progress.start();
          this.$store.commit("process/setLoading", true);
        }
      }
    }
  });
};

createApp();

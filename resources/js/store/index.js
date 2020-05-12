import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";
import error from "./error";
import process from "./process";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    error,
    process
  }
});

export default store;

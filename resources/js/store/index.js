import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";
import error from "./error";
import process from "./process";
import message from "./message";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    error,
    process,
    message
  }
});

export default store;

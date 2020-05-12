import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Router from "vue-router";
import PhotoList from "./pages/PhotoList.vue";
import Login from "./pages/Login.vue";
import SystemError from "./pages/errors/System.vue";

import store from "./store";

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: PhotoList
    },
    {
      path: "/login",
      component: Login,
      beforeEnter(to, from, next) {
        if (store.getters["auth/check"]) {
          next("/");
        } else {
          next();
        }
      }
    },
    {
      path: "/500",
      component: SystemError
    }
  ]
});

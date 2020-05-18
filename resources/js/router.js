import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Router from "vue-router";
import PhotoList from "./pages/PhotoList.vue";
import PhotoDetail from "./pages/PhotoDetail.vue";
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
      path: "/photo/:id",
      component: PhotoDetail,
      props: true
    },
    {
      path: "/login",
      component: Login,
      beforeEnter(to, from, next) {
        if (store.getters["auth/check"]) {
          next("/");
          store.commit("process/setLoading", false);
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

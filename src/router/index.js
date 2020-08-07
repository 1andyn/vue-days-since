import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import List from "../views/List.vue";
import Profile from "../views/Profile.vue";
import Settings from "../views/Settings.vue";
import { authGuard } from "../auth";


require('@/assets/css/style.css');


Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/main",
      name: "list",
      component: List,
      beforeEnter: authGuard
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      beforeEnter: authGuard
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings,
      beforeEnter: authGuard
    }
  ]
});

export default router;

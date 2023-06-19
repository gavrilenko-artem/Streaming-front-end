import { createWebHistory, createRouter } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("./pages/Home.vue"),
    },
    {
      name: "movie",
      path: "/movies/:id",
      component: () => import("./pages/Movie.vue"),
    },
    {
      name: "search",
      path: "/search",
      component: () => import("./pages/Search.vue"),
    },
    {
      name: "profile",
      path: "/profile",
      component: () => import("./pages/Profile.vue"),
    },
    {
      name: "settings",
      path: "/settings",
      component: () => import("./pages/Settings.vue"),
    },
  ],
});

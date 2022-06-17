import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "做個問題兒童 - Be a problem child",
    component: () => import("../views/home.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, _, next) => {
  document.title = to.name;
  next();
});

export default router;

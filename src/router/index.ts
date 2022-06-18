import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "做個問題兒童 - Be a problem child",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/members",
    name: "團隊成員 - be a problem child",
    component: () => import("../views/member.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, _, next) => {
  document.title = to.name;
  next();
});

export default router;

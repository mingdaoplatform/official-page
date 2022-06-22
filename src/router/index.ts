import { createRouter, createWebHistory } from "vue-router";
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
  {
    path: "/contact",
    name: "聯絡我們 - be a problem child",
    component: () => import("../views/contact.vue"),
  },
  {
    path: "/app",
    name: "立即發問 - be a problem child",
    component: () => import("../views/app.vue"),
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

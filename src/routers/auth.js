import { useUserStore } from "../stores/user-store";
import { createRouter, createWebHistory } from "vue-router";

const authRouter = [
  {
    path: "/auth/login",
    name: "login",
    meta: {
      layout: "auth",
    },
    beforeEnter: (to, from, next) => {
      useUserStore().id ? next("/admin/dashboard") : next();
    },
    component: () => import("@/views/auth/Login.vue"),
  },
  {
    path: "/auth/register",
    name: "register",
    meta: {
      layout: "auth",
    },
    component: () => import("@/views/auth/Register.vue"),
  },
];

export default authRouter;

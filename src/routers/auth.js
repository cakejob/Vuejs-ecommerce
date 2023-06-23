const authRouter = [
  {
    path: "/auth/login",
    name: "login",
    meta: {
      layout: "auth",
    },
    component: () => import("@/views/auth/Login.vue"),
  },
];

export default authRouter;

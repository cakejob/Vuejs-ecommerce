const staticRouter = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/Index.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-Found",
    component: () => import("@/views/errors/NotFound.vue"),
  },
];

export default staticRouter;

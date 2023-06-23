const staticRouter = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/Index.vue"),
  },
];

export default staticRouter;

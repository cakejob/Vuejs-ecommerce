const adminRouter = [
  {
    path: "/admin",
    name: "admin",
    meta: {
      layout: "admin",
    },
    component: () => import("../layouts/Admin.vue"),
    children: [
      {
        path: "dashboard",
        name: "admin-dashboard",
        component: () => import("../views/admins/dashboard/Index.vue"),
      },
      {
        path: "users",
        name: "admin-users",
        component: () => import("../views/admins/users/Index.vue"),
      },
      {
        path: "users/edit/:id",
        name: "admin-user-edit",
        component: () => import("../views/admins/users/edit.vue"),
      },
      {
        path: "users/view/:id",
        name: "admin-user-view",
        component: () => import("../views/admins/users/view.vue"),
      },
      {
        path: "roles",
        name: "admin-roles",
        component: () => import("../views/admins/roles/Index.vue"),
      },
    ],
  },
];

export default adminRouter;

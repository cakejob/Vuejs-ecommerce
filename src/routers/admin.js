import { useUserStore } from "@/stores/user-store";

const adminRouter = [
  {
    path: "/admin",
    name: "admin",
    meta: {
      layout: "admin",
    },
    beforeEnter: (to, from, next) => {
      useUserStore().id ? next() : next("/auth/login");
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
      {
        path: "account/edit/:id",
        name: "admin-account-edit",
        component: () => import("../views/admins/accounts/EditProfile.vue"),
      },
      {
        path: "account",
        name: "admin-account",
        component: () => import("../views/admins/accounts/Index.vue"),
      },
    ],
  },
];

export default adminRouter;

import { createRouter, createWebHistory } from "vue-router";

import admin from "./routers/admin.js";
import authRouter from "./routers/auth.js";
import staticRouter from "./routers/static.js";

const routes = [...staticRouter, ...admin, ...authRouter];

const router = createRouter({ history: createWebHistory(), routes });

export default router;

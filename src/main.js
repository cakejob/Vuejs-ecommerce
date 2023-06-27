import "ant-design-vue/dist/antd.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/tailwind.css";
import "./assets/styles/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./axios.js";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import { registerGlolbalComponents } from "@/utils/import.js";
/** 
Import Ant design view Components
*/
import { Drawer, List, Button, message } from "ant-design-vue";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

registerGlolbalComponents(app);

app.use(router);
app.use(Button);
app.use(Drawer);
app.use(List);
app.use(pinia);
app.mount("#app");

/**
 * This is config Ant design vue
 */
app.config.globalProperties.$message = message;

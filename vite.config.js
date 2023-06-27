import { fileURLToPath, URL } from "node:url";

import { UserConfig, ConfigEnv, loadEnv, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/

// export default defineConfig(({ command, mode }) => {
//   // Load env file based on `mode` in the current working directory.
//   // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
//   const env = loadEnv(mode, process.cwd(), "");

//   return {
//     // vite config
//     define: {
//       __APP_ENV__: env.APP_ENV,
//     },
//   };
// });

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

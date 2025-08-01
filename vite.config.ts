import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import inspect from "vite-plugin-inspect";


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    inspect(),
    vue(),
    tsconfigPaths({ loose: true }),
    tailwindcss(),
  ],
});

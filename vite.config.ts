import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import vue from "@vitejs/plugin-vue";
import inspect from "vite-plugin-inspect";
import UnoCSS from "unocss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [inspect(), UnoCSS(), vue(), tsconfigPaths({ loose: true })],
});

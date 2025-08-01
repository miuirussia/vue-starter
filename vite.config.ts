import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vueDevTools(), UnoCSS(), vue(), tsconfigPaths({ loose: true })],
});

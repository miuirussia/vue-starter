import os from "node:os";
import path from "node:path";

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import mkcert from "vite-plugin-mkcert";
import inspect from "vite-plugin-inspect";

const isDevelopment = process.env.NODE_ENV === "development";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    inspect(),
    vue(),
    tsconfigPaths({ loose: true }),
    tailwindcss(),
    isDevelopment ? mkcert({ mkcertPath: "/usr/bin/mkcert", savePath: path.join(os.homedir(), ".config", "vite-plugin-mkcert") }) : undefined,
  ],
});

import os from "node:os";
import path from "node:path";

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import mkcert from "vite-plugin-mkcert";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tsconfigPaths({ loose: true }),
    tailwindcss(),
    mkcert({ mkcertPath: "/usr/bin/mkcert", savePath: path.join(os.homedir(), ".config", "vite-plugin-mkcert") }),
  ],
});

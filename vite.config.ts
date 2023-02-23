import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";

import { defineConfig } from "vite";
import { VitePWA, type VitePWAOptions } from "vite-plugin-pwa";

const pwaOptions: Partial<VitePWAOptions> = {
  devOptions: {
    enabled: true,
  },
  srcDir: "sw",
  filename: "service-worker.js",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA(pwaOptions)],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

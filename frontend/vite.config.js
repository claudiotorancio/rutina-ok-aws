import { resolve } from "path";
import { defineConfig } from "vite";
export default defineConfig({
  base: './',
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        panelAdmin: resolve(import.meta.dirname, "panel.html"),
      }
    }
  },
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      }
    },
  },
});
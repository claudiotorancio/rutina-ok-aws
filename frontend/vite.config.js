import { resolve } from "path";
import { defineConfig } from "vite";
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? import.meta.env.VITE_API_URL : '',
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
      },
      // Rutas de autenticación del backend
      // '/panel-admin': 'http://localhost:3000',
      // '/panel.html': 'http://localhost:3000',
      // '/login': 'http://localhost:3000'
    },
  },
});
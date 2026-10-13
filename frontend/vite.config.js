import { resolve } from "path";
import { defineConfig } from "vite";
export default defineConfig({

  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        adminSecret: resolve(import.meta.dirname, "panel.html"),
      },
      output: {
        // 💡 2. Esta función renombra el HTML en la carpeta dist/ para que no se llame panel.html
        assetFileNames: '[name].[ext]',
        chunkFileNames: '[name].js',
        entryFileNames: '[name].js'
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
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  base: "/", // ensures root-relative paths work
  build: {
    outDir: "dist", // deploys to dist/, not dist/client/
    rollupOptions: {
      input: "index.html", // ensures index.html is at root
    },
  },
  plugins: [react(), cloudflare()],
});

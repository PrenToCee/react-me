import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  base: "/", // 👈 ensures root-relative paths work
  build: {
    outDir: "dist", // 👈 no nested folders like "dist/client"
    rollupOptions: {
      input: "index.html", // 👈 ensures Vite starts from the root
    },
  },
  plugins: [react(), cloudflare()],
});

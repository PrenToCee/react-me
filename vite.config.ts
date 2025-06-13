import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  root: "worker",
  build: {
    outDir: "../dist",
  },
  plugins: [react(), cloudflare()],
});

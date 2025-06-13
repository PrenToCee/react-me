import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  base: "/", // 👈 Ensures URLs like /b_kakada.jpg resolve correctly
  build: {
    outDir: "dist", // 👈 Keeps the output folder clean (not nested in /client)
  },
  plugins: [react(), cloudflare()],
});

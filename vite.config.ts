import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/my-4th_Assignment/",
  plugins: [
    react(),
    tailwindcss(),
  ],
});
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/SatisfactoryLab/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./scripts")
    }
  }
});

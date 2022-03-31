import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/ignored/**", "**/node_modules/**"],
    watch: false,
    root: "./src",
    // include: ["./src/**"],
  },
});

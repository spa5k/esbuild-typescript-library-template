import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	splitting: true,
	skipNodeModulesBundle: true,
	sourcemap: false,
	minify: true,
	format: ["cjs", "esm"],
	clean: true,
	dts: process.env.NODE_ENV === "production",
	outDir: "dist",
	treeshake: true,
	watch: process.env.NODE_ENV !== "production",
	platform: "neutral",
	target: "es2018",
	replaceNodeEnv: true,
});

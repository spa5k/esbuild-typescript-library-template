import type { Options } from "tsup";

export const tsup: Options = {
  splitting: true,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  minify: true,
  bundle: true,
  skipNodeModulesBundle: true,
  entryPoints: ["src/index.ts"],
};

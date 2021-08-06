// require("dotenv").config();

import type { Options } from "tsup";

const env = process.env.NODE_ENV;
export const tsup: Options = {
  splitting: true,
  sourcemap: env === "production",
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  minify: env === "production",
  bundle: true,
  skipNodeModulesBundle: true,
  entryPoints: ["src/index.ts"],
};

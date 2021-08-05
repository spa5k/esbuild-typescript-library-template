/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable import/first */
require("dotenv").config();

import type { Options } from "tsup";

const env = process.env.NODE_ENV;
console.log("env", env);

export const tsup: Options = {
  splitting: true,
  sourcemap: env === "production",
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  minify: env === "production",
  bundle: true,
  watch: env === "development",
  skipNodeModulesBundle: true,
  entryPoints: ["src/index.ts"],
};

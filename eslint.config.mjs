import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  {
    files: ["**/*.mjs"],
    rules: { "no-undef": "error", "no-unused-vars": "error", "no-unreachable": "error" },
  },
  globalIgnores([
    "**/*.res.mjs", "**/*.gen.tsx", "next-env.d.ts",
    ".next/**", "lib/**", "out/**", "build/**", "node_modules/**",
    ".direnv/**", ".pnpm-store/**", "result", "result-*/**",
    "coverage/**", "test-results/**", "playwright-report/**", "blob-report/**",
  ]),
]);

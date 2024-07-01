import { defineConfig } from "tsup"

export default defineConfig({
  outDir: `./dist/src`,
  entry: [`./src/index.ts`],
  format: [`cjs`, `esm`, `iife`],
  cjsInterop: true,
  dts: true,
  clean: true,
  minify: true
})

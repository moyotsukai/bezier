import babel from "@rollup/plugin-babel"
import postcss from "rollup-plugin-postcss"
import typescript from "@rollup/plugin-typescript"

const extensions = [".ts", ".tsx", ".js", ".jsx"]

export default [
  {
    input: "src/index.tsx",
    output: {
      dir: "dist/commonjs",
      format: "cjs",
      exports: "named",
      sourcemap: true,
      preserveModules: true
    },
    plugins: [
      postcss({
        extract: true,
      }),
      babel({
        extensions,
      }),
      typescript({
        declaration: true,
        rootDir: "src",
        declarationDir: "dist/commonjs",
      }),
    ],
  },
  {
    input: "src/index.tsx",
    output: {
      dir: "dist/es",
      format: "es",
      exports: "named",
      sourcemap: true,
      preserveModules: true
    },
    plugins: [
      postcss({
        extract: true,
      }),
      babel({
        extensions,
      }),
      typescript({
        declaration: true,
        rootDir: "src",
        declarationDir: "dist/es",
      }),
    ],
  },
]
import babel from "@rollup/plugin-babel"
import typescript from "@rollup/plugin-typescript"
import postcss from "rollup-plugin-postcss"

const extensions = [".ts", ".tsx", ".js", ".jsx"]

export default [
  {
    input: "src/index.tsx",
    output: {
      dir: "dist/commonjs",
      format: "cjs",
      exports: "named",
      sourcemap: true,
      preserveModules: true,
    },
    plugins: [
      babel({
        extensions,
      }),
      typescript({
        declaration: true,
        rootDir: "src",
        declarationDir: "dist/commonjs",
      }),
      postcss({
        extract: true,
      })
    ],
  },
  {
    input: "src/index.tsx",
    output: {
      dir: "dist/es",
      format: "es",
      exports: "named",
      sourcemap: true,
      preserveModules: true,
    },
    plugins: [
      babel({
        extensions,
      }),
      typescript({
        declaration: true,
        rootDir: "src",
        declarationDir: "dist/es",
      }),
      postcss({
        extract: true,
      })
    ],
  },
]
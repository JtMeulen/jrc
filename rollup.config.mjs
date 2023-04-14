import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";
import copy from "rollup-plugin-copy";
import alias from "@rollup/plugin-alias";
import path from "path";

import packageJson from "./package.json" assert { type: "json" };
const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default {
  input: "src/components/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: ["**/*.test.tsx"],
      },
    }),
    postcss(),
    image(),
    copy({
      targets: [
        {
          src: "src/components/Icon/assets",
          dest: "lib",
        },
      ],
      copyOnce: true,
    }),
    alias({
      entries: [
        {
          find: "assets",
          replacement: path.resolve(__dirname, "src/components/Icon/assets"),
        },
      ],
    }),
  ],
};

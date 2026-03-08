import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";

const dev = process.env.ROLLUP_WATCH;

export default {
  input: "src/custom_room_card.ts",
  output: {
    file: "dist/custom_room_card.js",
    format: "es",
    sourcemap: dev ? true : false,
  },
  plugins: [
    nodeResolve({ browser: true }),
    commonjs(),
    typescript(),
    json(),
    !dev && terser({ format: { comments: false } }),
  ],
};

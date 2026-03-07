const resolve = require('@rollup/plugin-node-resolve').default;
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const terser = require('@rollup/plugin-terser').default;

export default {
  input: 'src/custom-room-card.ts',
  output: {
    file: 'dist/custom-room-card.js',
    format: 'es',
    inlineDynamicImports: true,
  },
  external: ['lit'],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    terser(),
  ],
};

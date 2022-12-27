import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

// eslint-disable-next-line import/no-default-export
export default {
  input: './index.ts',

  output: {
    dir: './dist',
    format: 'es',
    preserveModules: false,
    sourcemap: true,
  },

  plugins: [
    peerDepsExternal(),
    nodeResolve({
      extensions: ['.cjs', '.js', 'json', '.jsx', '.mjs', '.ts', '.tson', '.tsx'],
      ignoreSideEffectsForRoot: true,
    }),
    // Convert CommonJS to ES6:
    commonjs(),
    // Transpile TS & TSX to JS:
    typescript({
      tsconfig: './tsconfig.dist.json',
    }),
  ],
}

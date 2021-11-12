import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import css from 'rollup-plugin-import-css'
import sizes from 'rollup-plugin-sizes'

export default {
  external: [
    'prop-types',
    'ramda',
    'react',
    'react-dom',
    'react-feather',
    'react-paginate',
    'react-select',
    'react-select/dist/react-select.cjs.js',
    'sha1',
    'styled-components',
  ],

  input: './index.ts',

  output: [
    {
      dir: './dist',
      format: 'esm',
      preserveModules: true,
      sourcemap: true,
    },
  ],

  plugins: [
    nodeResolve({
      extensions: ['css', '.js', '.jsx', '.ts', '.tsx'],
    }),
    // Convert CommonJS to ES6:
    commonjs(),
    // Import CSS into JS:
    css(),
    // Transpile TS & TSX to JS:
    typescript(),
    // Output bundle dependencies sizes:
    sizes(),
  ],
}

import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import replace from 'rollup-plugin-replace'

// eslint-disable-next-line no-undef
const NODE_ENV = process.env.NODE_ENV || 'development'

// eslint-disable-next-line import/no-default-export
export default {
  external: [
    'ramda',
    'react',
    'react-select',
    'react-select/async',
    'remark-parse',
    'remark-slate',
    'sha1',
    'slate',
    'slate-history',
    'slate-react',
    'styled-components',
    'unified',
  ],

  input: './src/index.ts',

  output: {
    dir: './dist',
    format: 'es',
    preserveModules: false,
  },

  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      'react-select/async': 'react-select/async/dist/react-select-async.esm',
    }),
    nodeResolve({
      extensions: ['.cjs', '.js', 'json', '.jsx', '.mjs', '.ts', '.tson', '.tsx'],
      ignoreSideEffectsForRoot: true,
    }),
    // Convert JSON to ES6:
    json(),
    // Convert CommonJS to ES6:
    commonjs(),
    // Transpile TS & TSX to JS:
    typescript({
      tsconfig: './tsconfig.dist.json',
    }),
  ],
}

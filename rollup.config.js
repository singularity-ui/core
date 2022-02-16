import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import styles from 'rollup-plugin-styles'

export default {
  external: [
    'better-prop-types',
    'is-hotkey',
    'ramda',
    'remark-parse',
    'remark-slate',
    'sha1',
    'slate',
    'slate-history',
    'slate-react',
    'tslib',
    'unified',
  ],
  input: './index.ts',

  output: [
    {
      dir: './dist',
      format: 'es',
      preserveModules: true,
      sourcemap: true,
    },
  ],

  plugins: [
    peerDepsExternal(),
    nodeResolve({
      extensions: ['css', '.js', 'json', '.jsx', '.ts', '.tson', '.tsx'],
    }),
    // Inject CSS & fonts into JS:
    styles(),
    // Convert CommonJS to ES6:
    commonjs(),
    // Transpile TS & TSX to JS:
    typescript({
      tsconfig: './tsconfig.dist.json',
    }),
    // Hack to make styled-component compatible with Next.js inability to fully support ESM:
    replace({
      '= styled(': '= (styled.default || styled)(',
      '= styled.': '= (styled.default || styled).',
      delimiters: ['', ''],
      preventAssignment: false,
    }),
  ],
}

import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const getConfig = input => {
  const isSingle = input !== './index.ts'

  return {
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

    input,

    output: [
      isSingle
        ? {
            file: './dist/fields/Select.js',
            format: 'es',
            preserveModules: false,
            sourcemap: false,
          }
        : {
            dir: './dist',
            format: 'es',
            preserveModules: true,
            sourcemap: true,
          },
    ],

    plugins: [
      peerDepsExternal(),
      nodeResolve({
        extensions: ['css', '.js', 'json', '.jsx', '.ts', '.tson', '.tsx', 'woff', 'woff2'],
        ignoreSideEffectsForRoot: true,
      }),
      // Convert CommonJS to ES6:
      commonjs(),
      // Transpile TS & TSX to JS:
      typescript({
        tsconfig: isSingle ? './tsconfig.dist.single.json' : './tsconfig.dist.json',
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
}

module.exports = ['./index.ts', './fields/Select.tsx'].map(getConfig)

import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import css from 'rollup-plugin-import-css'
import sizes from 'rollup-plugin-sizes'

export default {
  external: [
    /@babel\/runtime/,
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

  input: './index.js',

  output: [
    {
      dir: './dist',
      format: 'esm',
      preserveModules: true,
      sourcemap: true,
    },
  ],

  plugins: [
    // Resolve JSX imports:
    nodeResolve({
      extensions: ['css', '.js', '.jsx'],
    }),
    // Convert CommonJS to ES6:
    commonjs(),
    // Import CSS into JS:
    css(),
    // Transpile JSX to JS:
    babel({
      babelHelpers: 'runtime',
      exclude: [/node_modules/],
      extensions: ['js', 'jsx'],
      plugins: ['@babel/plugin-transform-runtime'],
      presets: ['@babel/preset-react'],
    }),
    // Output bundle dependencies sizes:
    sizes(),
  ],
}

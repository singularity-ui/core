import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import del from 'del'
import glob from 'glob'
import css from 'rollup-plugin-import-css'
import sizes from 'rollup-plugin-sizes'

const DIRECT_FILE_PATHS = [...glob.sync('./+(elements|fields)/*.jsx'), './GlobalStyle.jsx', './ThemeProvider.jsx']
const ICON_FILE_PATHS = [...glob.sync('./icons/!(Icon|index).jsx')]
const NESTED_FILE_PATHS = [...glob.sync('./contents/*/index.jsx')]

const getConfig = (format, input, outputFilePath, exports = 'default') => ({
  external: [
    /@babel\/runtime/,
    'prop-types',
    'ramda',
    'react',
    'react-dom',
    'react-feather',
    // 'react-paginate',
    'react-select',
    'react-select/async',
    'sha1',
    'styled-components',
  ],

  input,

  output: [
    {
      // https://rollupjs.org/guide/en/#outputexports
      exports,
      file: outputFilePath,
      format,
    },
  ],

  plugins: [
    // Convert CommonJS to ES6:
    commonjs(),
    // Resolve JSX imports:
    nodeResolve({
      extensions: ['css', '.js', '.jsx'],
    }),
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
})

const configs = [
  getConfig('cjs', './index.js', './dist/cjs/index.js', 'named'),

  getConfig('esm', './index.js', './dist/index.js', 'named'),
  getConfig('esm', './common/constants.js', './dist/SING.js', 'named'),
  getConfig('esm', './common/theme.js', './dist/theme.js'),
  ...DIRECT_FILE_PATHS.map(filePath => {
    const fileName = /\/([^/]*).jsx$/.exec(filePath)[1]

    return getConfig('esm', filePath, `./dist/${fileName}.js`)
  }),
  ...ICON_FILE_PATHS.map(filePath => {
    const fileName = /\/([^/]*).jsx$/.exec(filePath)[1]

    return getConfig('esm', filePath, `./dist/icons/${fileName}.js`)
  }),
  ...NESTED_FILE_PATHS.map(filePath => {
    const fileName = /\/([^/]*)\/index.jsx$/.exec(filePath)[1]

    return getConfig('esm', filePath, `./dist/${fileName}.js`)
  }),
]

del.sync(['./dist'])

export default [...configs]

import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import del from 'del'
import glob from 'glob'
import css from 'rollup-plugin-import-css'
import sizes from 'rollup-plugin-sizes'

const DIRECT_FILE_PATHS = [...glob.sync('./+(elements|fields)/*.jsx'), './GlobalStyle.jsx', './ThemeProvider.jsx']
const ICON_FILE_PATHS = [...glob.sync('./icons/!(Icon|index).jsx')]
const NESTED_FILE_PATHS = [...glob.sync('./contents/*/index.jsx')]

const getConfig = (format, input, outputFilePath) => ({
  external: [
    /@babel\/runtime/,
    'prop-types',
    'ramda',
    'react',
    'react-feather',
    'react-paginate',
    'react-select',
    'react-select/async',
    'sha1',
    'styled-components',
  ],

  input,

  output: [
    {
      exports: 'default',
      file: outputFilePath,
      format,
    },
  ],

  plugins: [
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
  getConfig('cjs', './index.js', './dist/index.js'),
  ...DIRECT_FILE_PATHS.map(filePath => {
    const fileName = /\/([^/]*).jsx$/.exec(filePath)[1]

    return getConfig('cjs', filePath, `./dist/${fileName}.js`)
  }),
  ...ICON_FILE_PATHS.map(filePath => {
    const fileName = /\/([^/]*).jsx$/.exec(filePath)[1]

    return getConfig('cjs', filePath, `./dist/icons/${fileName}.js`)
  }),
  ...NESTED_FILE_PATHS.map(filePath => {
    const fileName = /\/([^/]*)\/index.jsx$/.exec(filePath)[1]

    return getConfig('cjs', filePath, `./dist/${fileName}.js`)
  }),
]

del.sync(['./dist'])

export default [...configs]

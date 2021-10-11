import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import del from 'del'
import glob from 'glob'
import sizes from 'rollup-plugin-sizes'

const FILE_PATHS = [...glob.sync('./+(elements|fields)/*.jsx'), './GlobalStyle.jsx', './ThemeProvider.jsx']

const getConfig = (format, input, outputFilePath) => ({
  external: [
    /@babel\/runtime/,
    /@fontsource/,
    'lodash.merge',
    'prop-types',
    'react',
    'react-paginate',
    'react-select',
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
      extensions: ['.js', '.jsx'],
    }),
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
  ...FILE_PATHS.map(filePath => {
    const fileName = /\/([^/]*).jsx$/.exec(filePath)[1]

    return getConfig('esm', filePath, `./dist/${fileName}.js`)
  }),
]

del.sync(['./dist'])

export default [...configs]

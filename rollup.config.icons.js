import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import glob from 'glob'

function getLibPath(svgIconPath) {
  return /([^/]+\/[^/]+)$/.exec(svgIconPath)[1]
}

const ICON_LIB_PATHS = glob.sync('./icons/*/*.jsx').map(getLibPath)

export default ICON_LIB_PATHS.map(iconLibPath => ({
  external: [/@babel\/runtime/, 'prop-types', 'react', 'styled-components'],

  input: `./icons/${iconLibPath}`,

  output: [
    {
      exports: 'default',
      file: `./dist/icons/${iconLibPath.replace(/.jsx$/, '.js')}`,
      format: 'esm',
      sourcemap: false,
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
  ],
}))

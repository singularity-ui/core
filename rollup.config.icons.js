import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import glob from 'glob'

const ICON_PATHS = glob.sync('./icons/**/*.{js,jsx}')

export default ICON_PATHS.map(iconPath => ({
  external: [/\.\.\/common\/constants/, /@babel\/runtime/, 'prop-types', 'react', 'styled-components'],

  input: iconPath,

  output: [
    {
      dir: `./dist/icons`,
      format: 'esm',
      preserveModules: true,
      sourcemap: true,
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

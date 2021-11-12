import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import glob from 'glob'

const ICON_PATHS = glob.sync('./icons/**/*.{ts,tsx}')

export default ICON_PATHS.map(iconPath => ({
  external: ['prop-types', 'react', 'styled-components'],

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
    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    // Transpile TS & TSX to JS:
    typescript(),
  ],
}))

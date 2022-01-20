import 'styled-components'

import { Theme } from '..'

declare module '*.css'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

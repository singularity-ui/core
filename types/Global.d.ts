import 'styled-components'

import { Theme } from '../common/theme'

declare module '*.css'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

import { mergeDeepRight } from 'ramda'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

import { THEME as BASE_THEME } from './theme'

import type { PartialTheme } from './types'

export type ThemeProviderProps = {
  children: any
  theme?: PartialTheme
}
export function ThemeProvider({ children, theme = {} }: ThemeProviderProps) {
  const finalTheme = mergeDeepRight(BASE_THEME, theme)

  return <StyledComponentsThemeProvider theme={finalTheme}>{children}</StyledComponentsThemeProvider>
}

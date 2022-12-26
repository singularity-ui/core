import { mergeDeepRight } from 'ramda'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

import { theme as baseTheme, Theme } from './common/theme'

const UntypedStyledComponentsThemeProvider: any = StyledComponentsThemeProvider

export type ThemeProviderProps = {
  children: any
  theme?: Common.DeepPartial<Theme>
}
export function ThemeProvider({ children, theme = {} }: ThemeProviderProps) {
  const finalTheme = mergeDeepRight(baseTheme, theme)

  return <UntypedStyledComponentsThemeProvider theme={finalTheme}>{children}</UntypedStyledComponentsThemeProvider>
}

import * as R from 'ramda'
import React, { FunctionComponent } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

import { theme as baseTheme, Theme } from './common/theme'
import { ThemeShape } from './common/ThemeShape'

export type ThemeProviderProps = {
  theme?: Common.DeepPartial<Theme>
}
export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children, theme = {} }) => {
  const finalTheme = R.mergeDeepRight(baseTheme, theme)

  return <StyledComponentsThemeProvider theme={finalTheme}>{children}</StyledComponentsThemeProvider>
}

ThemeProvider.propTypes = {
  theme: ThemeShape.isOptionalButNotNull,
}

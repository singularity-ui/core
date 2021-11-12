import * as R from 'ramda'
import React from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

import { theme as baseTheme } from './common/theme'
import { ThemeShape } from './common/ThemeShape'

export const ThemeProvider = ({ children, theme }) => {
  const finalTheme = R.mergeDeepRight(baseTheme, theme)

  return <StyledComponentsThemeProvider theme={finalTheme}>{children}</StyledComponentsThemeProvider>
}

ThemeProvider.defaultProps = {
  theme: {},
}

ThemeProvider.propTypes = {
  theme: ThemeShape,
}

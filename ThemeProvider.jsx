import merge from 'lodash.merge'
import React from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

import baseTheme, { ThemeShape } from './common/theme'

const ThemeProvider = ({ children, theme }) => {
  const finalTheme = merge(baseTheme, theme)

  return <StyledComponentsThemeProvider theme={finalTheme}>{children}</StyledComponentsThemeProvider>
}

export default ThemeProvider

ThemeProvider.defaultProps = {
  theme: {},
}

ThemeProvider.propTypes = {
  theme: ThemeShape,
}

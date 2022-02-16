import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../common/theme'
import { GlobalStyle } from '../GlobalStyle'

import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Story />
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

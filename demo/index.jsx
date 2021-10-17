import GlobalStyle from '@ivangabriele/singularity/GlobalStyle'
import ThemeProvider from '@ivangabriele/singularity/ThemeProvider'
import React from 'react'
import ReactDom from 'react-dom'
import { createGlobalStyle } from 'styled-components'

import App from './App'
import withDatabase from './hocs/withDatabase'

import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'

const GlobalStyleCustom = createGlobalStyle`
  html {
    display: flex;
    height: 100%;
  }

  body {
    margin: ${p => p.theme.padding.layout.medium};
  }

  body,
  #__next,
  #__sda {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  h1 {
    padding-bottom: ${p => p.theme.padding.layout.medium};
  }
`

const AugmentedApp = withDatabase(App)

ReactDom.render(
  <ThemeProvider>
    <GlobalStyle />
    <GlobalStyleCustom />

    <AugmentedApp />
  </ThemeProvider>,
  document.getElementById('__sda'),
)

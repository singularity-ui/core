import { GlobalStyle, ThemeProvider } from '@ivangabriele/singularity'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'

const GlobalStyleCustom = createGlobalStyle`
  html {
    display: flex;
    height: 100%;
  }

  body,
  #__next,
  #__se2e {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`

export default function SingularityE2eApp({ Component, pageProps }) {
  if (!process.browser) {
    return <div id="__laa" suppressHydrationWarning />
  }

  return (
    <div id="__se2e" suppressHydrationWarning>
      <Head>
        <title>Singularity E2E App</title>

        <meta content="initial-scale=1, width=device-width" name="viewport" />
      </Head>

      <ThemeProvider>
        <GlobalStyle />
        <GlobalStyleCustom />

        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

import { GlobalStyle, ThemeProvider } from '@singularity/core'
import type { AppProps } from 'next/app'

import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

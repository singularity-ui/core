import { createGlobalStyle } from 'styled-components'

import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${p => p.theme.color.body.background};
    font-family: ${p => p.theme.typography.font.default.family};
    font-size: ${p => p.theme.typography.font.default.size};
    font-weigth: ${p => p.theme.typography.font.default.weigth};
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  ::placeholder {
    color: ${p => p.theme.color.body.light};
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`

export default GlobalStyle

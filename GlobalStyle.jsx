import { createGlobalStyle } from 'styled-components'

import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${p => p.theme.typography.font.default.family};
    font-size: ${p => p.theme.typography.font.default.size};
    font-weigth: ${p => p.theme.typography.font.default.weigth};
  }

  * {
    box-sizing: border-box;
  }

  ::placeholder {
    color: ${p => p.theme.color.body.light};
  }
`

export default GlobalStyle

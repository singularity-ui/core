import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }

  body {
    background-color: ${p => p.theme.color.body.background};
    font-family: ${p => p.theme.typography.font.default.family};
    font-size: ${p => p.theme.typography.font.default.size};
    font-weight: ${p => p.theme.typography.font.default.weight};
    line-height: 1.5;
    margin: 0;
    color: ${p => p.theme.color.body.main};
  }

  * {
    box-sizing: border-box;
  }

  :focus-visible {
    outline: none;
  }

  ::placeholder {
    color: ${p => p.theme.color.body.light};
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  * > p:not(:first-child) {
    margin-top: ${p => p.theme.padding.layout.small};
  }

  * > .Tag:not(:first-child) {
    margin-left: ${p => p.theme.padding.layout.small};
  }
`

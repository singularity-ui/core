import React from 'react'
import styled from 'styled-components'

const MaterialFormatListNumberedSvg = props =>
  /* #__PURE__ */ React.createElement(
    'svg',
    {
      height: '24',
      viewBox: '0 0 24 24',
      width: '24',
      xmlns: 'http://www.w3.org/2000/svg',
      ...props,
    },
    /* #__PURE__ */ React.createElement('path', {
      d: 'M0 0h24v24H0z',
      fill: 'none',
    }),
    /* #__PURE__ */ React.createElement('path', {
      d: 'M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z',
    }),
  )

export const MaterialFormatListNumbered = (styled.default || styled)(MaterialFormatListNumberedSvg).attrs(p => ({
  accent: p.accent || 'primary',
}))`
  fill: ${p => p.theme.color[p.accent].active};
`

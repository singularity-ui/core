import React from 'react'
import styled from 'styled-components'

const MaterialFormatQuoteSvg = props =>
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
      d: 'M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z',
    }),
  )

export const MaterialFormatQuote = (styled.default || styled)(MaterialFormatQuoteSvg).attrs(p => ({
  accent: p.accent || 'primary',
}))`
  fill: ${p => p.theme.color[p.accent].active};
`

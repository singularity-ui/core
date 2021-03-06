import React from 'react'
import styled from 'styled-components'

const MaterialCodeSvg = props =>
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
      d: 'M0 0h24v24H0V0z',
      fill: 'none',
    }),
    /* #__PURE__ */ React.createElement('path', {
      d: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
    }),
  )

export const MaterialCode = (styled.default || styled)(MaterialCodeSvg).attrs(p => ({
  accent: p.accent || 'primary',
}))`
  fill: ${p => p.theme.color[p.accent].active};
`

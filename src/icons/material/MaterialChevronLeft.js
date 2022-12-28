import React from 'react'
import { styled } from 'styled-components'

const MaterialChevronLeftSvg = props =>
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
      d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z',
    }),
  )

export const MaterialChevronLeft = (styled.default || styled)(MaterialChevronLeftSvg).attrs(p => ({
  accent: p.accent || 'primary',
}))`
  fill: ${p => p.theme.color[p.accent].active};
`

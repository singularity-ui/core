import React from 'react';
import styled from 'styled-components';

const MaterialVerticalAlignTopSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"
}));

const MaterialVerticalAlignTopSharp = (styled.default || styled)(MaterialVerticalAlignTopSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialVerticalAlignTopSharp;
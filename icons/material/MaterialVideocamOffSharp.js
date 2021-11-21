import React from 'react';
import styled from 'styled-components';

const MaterialVideocamOffSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 16.61V6.5l-4 4V6h-6.61zM3.41 1.86L2 3.27 4.73 6H3v12h13.73l3 3 1.41-1.41z"
}));

const MaterialVideocamOffSharp = (styled.default || styled)(MaterialVideocamOffSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialVideocamOffSharp;
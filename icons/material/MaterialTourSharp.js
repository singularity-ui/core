import React from 'react';
import styled from 'styled-components';

const MaterialTourSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  x: "0",
  y: "0"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21,4h-8h-1H7V2H5v2v10v8h2v-8h4h1h9l-2-5L21,4z M15,9c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S15,7.9,15,9z"
})));

const MaterialTourSharp = (styled.default || styled)(MaterialTourSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialTourSharp;
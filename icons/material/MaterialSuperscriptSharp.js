import React from 'react';
import styled from 'styled-components';

const MaterialSuperscriptSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M20,7v1h3v1h-4V6h3V5h-3V4h4v3H20z M5.88,20h2.66l3.4-5.42h0.12l3.4,5.42h2.66l-4.65-7.27L17.81,6h-2.68l-3.07,4.99h-0.12 L8.85,6H6.19l4.32,6.73L5.88,20z"
})));

const MaterialSuperscriptSharp = (styled.default || styled)(MaterialSuperscriptSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSuperscriptSharp;
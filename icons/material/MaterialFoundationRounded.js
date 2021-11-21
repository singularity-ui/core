import React from 'react';
import styled from 'styled-components';

const MaterialFoundationRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,12h1.7c0.46,0,0.68-0.57,0.33-0.87L12.67,3.6c-0.38-0.34-0.96-0.34-1.34,0l-8.36,7.53C2.63,11.43,2.84,12,3.3,12H5v3H4 c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h1v2c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-2h4v2c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1 v-2h4v2c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-2h1c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-1V12z M7,15v-4.81l4-3.6V15H7z M13,15 V6.59l4,3.6V15H13z"
}));

const MaterialFoundationRounded = (styled.default || styled)(MaterialFoundationRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialFoundationRounded;
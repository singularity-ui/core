import React from 'react';
import styled from 'styled-components';

const MaterialAccountTreeRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M17,11h3c1.11,0,2-0.9,2-2V5c0-1.11-0.9-2-2-2h-3c-1.11,0-2,0.9-2,2v1H9.01V5c0-1.11-0.9-2-2-2H4C2.9,3,2,3.9,2,5v4 c0,1.11,0.9,2,2,2h3c1.11,0,2-0.9,2-2V8H11v7.01c0,1.65,1.34,2.99,2.99,2.99H15v1c0,1.11,0.9,2,2,2h3c1.11,0,2-0.9,2-2v-4 c0-1.11-0.9-2-2-2h-3c-1.11,0-2,0.9-2,2v1h-1.01C13.45,16,13,15.55,13,15.01V8h2v1C15,10.1,15.9,11,17,11z"
}));

const MaterialAccountTreeRounded = (styled.default || styled)(MaterialAccountTreeRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialAccountTreeRounded;
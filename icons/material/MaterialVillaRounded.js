import React from 'react';
import styled from 'styled-components';

const MaterialVillaRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7,21H4c-0.55,0-1-0.45-1-1V8.69C3,8.27,3.25,7.9,3.64,7.75l11-4.23C15.3,3.27,16,3.75,16,4.46V10H8c-0.55,0-1,0.45-1,1V21z M17,12h-7c-0.55,0-1,0.45-1,1v7c0,0.55,0.45,1,1,1h4v-4c0-0.55,0.45-1,1-1s1,0.45,1,1v4h4c0.55,0,1-0.45,1-1v-8c0-1.1-0.9-2-2-2 S17,10.9,17,12z"
}));

const MaterialVillaRounded = (styled.default || styled)(MaterialVillaRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialVillaRounded;
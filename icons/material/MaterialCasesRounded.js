import React from 'react';
import styled from 'styled-components';

const MaterialCasesRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M18,5V3c0-1.1-0.9-2-2-2h-4c-1.1,0-2,0.9-2,2v2H7C5.9,5,5,5.9,5,7v9c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V7c0-1.1-0.9-2-2-2 H18z M16,5h-4V3h4V5z M2,9L2,9c-0.55,0-1,0.45-1,1v10c0,1.1,0.9,2,2,2h15c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H3V10 C3,9.45,2.55,9,2,9z"
})));

const MaterialCasesRounded = (styled.default || styled)(MaterialCasesRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialCasesRounded;
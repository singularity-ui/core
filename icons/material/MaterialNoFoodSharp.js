import React from 'react';
import styled from 'styled-components';

const MaterialNoFoodSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.35,8.52L11,5h5V1h2v4h5l-1.38,13.79L18,15.17L11.35,8.52z M21.9,21.9L2.1,2.1L0.69,3.51l5.7,5.7 C3.46,9.83,1,11.76,1,15h11.17l2,2H1v2h15v-0.17l4.49,4.49L21.9,21.9z M1,23h15v-2H1V23z"
})));

const MaterialNoFoodSharp = (styled.default || styled)(MaterialNoFoodSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialNoFoodSharp;
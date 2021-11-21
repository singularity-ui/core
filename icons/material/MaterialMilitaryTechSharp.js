import React from 'react';
import styled from 'styled-components';

const MaterialMilitaryTechSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M17,11V2H7v9l4.66,2.8l-0.99,2.34l-3.41,0.29l2.59,2.24L9.07,22L12,20.23L14.93,22l-0.78-3.33l2.59-2.24l-3.41-0.29 l-0.99-2.34L17,11z M13,12.23l-1,0.6l-1-0.6V3h2V12.23z"
})));

const MaterialMilitaryTechSharp = (styled.default || styled)(MaterialMilitaryTechSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialMilitaryTechSharp;
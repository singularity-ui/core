import React from 'react';
import styled from 'styled-components';

const MaterialBreakfastDiningSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  y: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M17.85,3L6.14,3C4.15,3,2.36,4.39,2.05,6.36C1.78,8.11,2.64,9.65,4,10.45V21h16V10.45c1.36-0.79,2.23-2.36,1.95-4.11 C21.63,4.38,19.83,3,17.85,3z M16.41,13L12,17.42L7.59,13L12,8.59L16.41,13z"
})));

const MaterialBreakfastDiningSharp = (styled.default || styled)(MaterialBreakfastDiningSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialBreakfastDiningSharp;
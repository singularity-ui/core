import React from 'react';
import styled from 'styled-components';

const MaterialSystemSecurityUpdateGoodSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M5,1v22h14V1H5z M17,18H7V6h10V18z M16,10.05l-1.41-1.41l-3.54,3.54l-1.41-1.41l-1.41,1.41L11.05,15L16,10.05z"
})));

const MaterialSystemSecurityUpdateGoodSharp = (styled.default || styled)(MaterialSystemSecurityUpdateGoodSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSystemSecurityUpdateGoodSharp;
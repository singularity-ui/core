import React from 'react';
import styled from 'styled-components';

const MaterialSecurityUpdateSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M5,1v22h14V1H5z M17,18H7V6h10V18z M16,12h-3V8h-2v4H8l4,4L16,12z"
})));

const MaterialSecurityUpdateSharp = (styled.default || styled)(MaterialSecurityUpdateSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSecurityUpdateSharp;
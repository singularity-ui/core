import React from 'react';
import styled from 'styled-components';

const MaterialSystemSecurityUpdateWarningSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "11",
  y: "15"
}), /*#__PURE__*/React.createElement("rect", {
  height: "6",
  width: "2",
  x: "11",
  y: "7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.01,1v22H19V1H5.01z M17,18H7V6h10V18z"
}))));

const MaterialSystemSecurityUpdateWarningSharp = (styled.default || styled)(MaterialSystemSecurityUpdateWarningSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSystemSecurityUpdateWarningSharp;
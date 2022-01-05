import React from 'react';
import styled from 'styled-components';

const MaterialElectricMopedSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M19,8.35V3h-5v2h3v2.65L13.52,12H10V7H6c-2.21,0-4,1.79-4,4v3h2c0,1.66,1.34,3,3,3s3-1.34,3-3h4.48L19,8.35z M7,15 c-0.55,0-1-0.45-1-1h2C8,14.55,7.55,15,7,15z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "5",
  x: "5",
  y: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,11c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S20.66,11,19,11z M19,15c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1 S19.55,15,19,15z"
})), /*#__PURE__*/React.createElement("polygon", {
  points: "7,20 11,20 11,18 17,21 13,21 13,23"
})));

const MaterialElectricMopedSharp = (styled.default || styled)(MaterialElectricMopedSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialElectricMopedSharp;
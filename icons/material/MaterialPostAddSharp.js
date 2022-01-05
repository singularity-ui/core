import React from 'react';
import styled from 'styled-components';

const MaterialPostAddSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "17,19.22 5,19.22 5,7 12,7 12,5 3,5 3,21 19,21 19,12 17,12"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,2h-2v3h-3c0.01,0.01,0,2,0,2h3v2.99c0.01,0.01,2,0,2,0V7h3V5h-3V2z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "8",
  x: "7",
  y: "9"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "7,12 7,14 15,14 15,12 12,12"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "8",
  x: "7",
  y: "15"
}))));

const MaterialPostAddSharp = (styled.default || styled)(MaterialPostAddSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialPostAddSharp;
import React from 'react';
import styled from 'styled-components';

const MaterialPersonAddAltOneTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "8",
  opacity: ".3",
  r: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9,16c-2.7,0-5.8,1.29-6,2h12C14.78,17.28,11.69,16,9,16z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9,14c-2.67,0-8,1.34-8,4v2h16v-2C17,15.34,11.67,14,9,14z M3,18c0.2-0.71,3.3-2,6-2c2.69,0,5.78,1.28,6,2H3z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "20,10 20,7 18,7 18,10 15,10 15,12 18,12 18,15 20,15 20,12 23,12 23,10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2 S7,9.1,7,8C7,6.9,7.9,6,9,6z"
}))));

const MaterialPersonAddAltOneTwoTone = (styled.default || styled)(MaterialPersonAddAltOneTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialPersonAddAltOneTwoTone;
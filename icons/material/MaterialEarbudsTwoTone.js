import React from 'react';
import styled from 'styled-components';

const MaterialEarbudsTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M7,6c0-0.55-0.45-1-1-1S5,5.45,5,6v1h1C6.55,7,7,6.55,7,6z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17,18c0,0.55,0.45,1,1,1s1-0.45,1-1v-1h-1C17.45,17,17,17.45,17,18z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16,3c-2.76,0-5,2.24-5,5v8c0,1.66-1.34,3-3,3s-3-1.34-3-3V9h0.83C7.44,9,8.89,7.82,9,6.21c0.12-1.69-1.16-3.1-2.8-3.21 C4.44,2.89,3,4.42,3,6.19V16c0,2.76,2.24,5,5,5s5-2.24,5-5V8c0-1.66,1.34-3,3-3s3,1.34,3,3v7h-0.83c-1.61,0-3.06,1.18-3.17,2.79 c-0.12,1.69,1.16,3.1,2.8,3.21c1.76,0.12,3.2-1.42,3.2-3.18V8C21,5.24,18.76,3,16,3z M5,6c0-0.55,0.45-1,1-1s1,0.45,1,1 S6.55,7,6,7H5V6z M19,18c0,0.55-0.45,1-1,1s-1-0.45-1-1s0.45-1,1-1h1V18z"
}))));

const MaterialEarbudsTwoTone = (styled.default || styled)(MaterialEarbudsTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialEarbudsTwoTone;
import React from 'react';
import styled from 'styled-components';

const MaterialReceiptLongSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "6",
  x: "9",
  y: "7"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "16",
  y: "7"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "6",
  x: "9",
  y: "10"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "16",
  y: "10"
})));

const MaterialReceiptLong = (styled.default || styled)(MaterialReceiptLongSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialReceiptLong;
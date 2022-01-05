import React from 'react';
import styled from 'styled-components';

const MaterialSubscriptSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,18v1h3v1h-4v-3h3v-1h-3v-1h4v3H20z M5.88,18h2.66l3.4-5.42h0.12l3.4,5.42h2.66l-4.65-7.27L17.81,4h-2.68l-3.07,4.99 h-0.12L8.85,4H6.19l4.32,6.73L5.88,18z"
})));

const MaterialSubscriptSharp = (styled.default || styled)(MaterialSubscriptSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSubscriptSharp;
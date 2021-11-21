import React from 'react';
import styled from 'styled-components';

const MaterialAddBusinessSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M15,17h2v-3h1v-2l-1-5H2l-1,5v2h1v6h9v-6h4V17z M9,18H4v-4h5V18z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "15",
  x: "2",
  y: "4"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "20,18 20,15 18,15 18,18 15,18 15,20 18,20 18,23 20,23 20,20 23,20 23,18"
}))));

const MaterialAddBusiness = (styled.default || styled)(MaterialAddBusinessSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialAddBusiness;
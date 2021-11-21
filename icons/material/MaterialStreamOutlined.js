import React from 'react';
import styled from 'styled-components';

const MaterialStreamOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  cx: "20",
  cy: "12",
  r: "2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "4",
  cy: "12",
  r: "2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "20",
  r: "2"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  transform: "matrix(0.7081 -0.7061 0.7061 0.7081 -0.1146 13.9802)",
  width: "6.22",
  x: "13.74",
  y: "6.13"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "8.32,9.68 8.63,10 10.05,8.59 6.03,4.55 6.02,4.55 5.71,4.23 4.29,5.64 8.31,9.69"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "15.41,13.94 14,15.35 17.99,19.36 18.34,19.71 19.76,18.3 15.77,14.29"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "8.59,13.95 4.56,17.96 4.24,18.29 5.65,19.7 9.68,15.68 10.01,15.36"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "4",
  r: "2"
}))));

const MaterialStreamOutlined = (styled.default || styled)(MaterialStreamOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialStreamOutlined;
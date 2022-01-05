import React from 'react';
import styled from 'styled-components';

const MaterialAnalyticsSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "5",
  width: "2",
  x: "7",
  y: "12"
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "3",
  width: "2",
  x: "11",
  y: "14"
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "10",
  width: "2",
  x: "15",
  y: "7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3,3v18h18V3H3z M9,17H7v-5h2V17z M13,17h-2v-3h2V17z M13,12h-2v-2h2V12z M17,17h-2V7h2V17z"
}));

const MaterialAnalyticsSharp = (styled.default || styled)(MaterialAnalyticsSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialAnalyticsSharp;
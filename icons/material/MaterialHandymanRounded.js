import React from 'react';
import styled from 'styled-components';

const MaterialHandymanRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M21.67,18.17l-4.72-4.72c-0.48-0.48-0.99-0.59-1.58-0.59l-2.54,2.54c0,0.59,0.11,1.11,0.59,1.58l4.72,4.72 c0.39,0.39,1.02,0.39,1.41,0l2.12-2.12C22.06,19.2,22.06,18.56,21.67,18.17z"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M16.63,9.49c0.39,0.39,1.02,0.39,1.41,0l0.71-0.71l2.12,2.12c1.17-1.17,1.17-3.07,0-4.24l-2.83-2.83 c-0.39-0.39-1.02-0.39-1.41,0l-0.71,0.71V2c0-0.62-0.76-0.95-1.21-0.5l-2.54,2.54c-0.45,0.45-0.12,1.21,0.5,1.21h2.54l-0.71,0.71 c-0.39,0.39-0.39,1.02,0,1.41l0.35,0.35l-2.89,2.89L7.85,6.48v-1c0-0.27-0.11-0.52-0.29-0.71L5.54,2.74 c-0.39-0.39-1.02-0.39-1.41,0L2.71,4.16c-0.39,0.39-0.39,1.02,0,1.41L4.73,7.6c0.19,0.19,0.44,0.29,0.71,0.29h1l4.13,4.13 l-0.85,0.85H8.42c-0.53,0-1.04,0.21-1.41,0.59l-4.72,4.72c-0.39,0.39-0.39,1.02,0,1.41l2.12,2.12c0.39,0.39,1.02,0.39,1.41,0 l4.72-4.72c0.38-0.38,0.59-0.88,0.59-1.41v-1.29l5.15-5.15L16.63,9.49z"
})))));

const MaterialHandymanRounded = (styled.default || styled)(MaterialHandymanRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialHandymanRounded;
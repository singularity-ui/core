import React from 'react';
import styled from 'styled-components';

const MaterialAutoFixOffRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  x: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M22,3.55l-1.06-0.49L20.45,2c-0.18-0.39-0.73-0.39-0.91,0l-0.49,1.06L18,3.55c-0.39,0.18-0.39,0.73,0,0.91l1.06,0.49 L19.55,6c0.18,0.39,0.73,0.39,0.91,0l0.49-1.06L22,4.45C22.39,4.28,22.39,3.72,22,3.55z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.17,8.42l1.41,1.41l-1.46,1.46l1.41,1.41l2.17-2.17c0.39-0.39,0.39-1.02,0-1.41l-2.83-2.83 c-0.39-0.39-1.02-0.39-1.41,0l-2.17,2.17l1.41,1.41L14.17,8.42z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.1,4.93l6.36,6.36l-6.17,6.17c-0.39,0.39-0.39,1.02,0,1.41l2.83,2.83c0.39,0.39,1.02,0.39,1.41,0l6.17-6.17l6.36,6.36 c0.39,0.39,1.02,0.39,1.41,0h0c0.39-0.39,0.39-1.02,0-1.41L3.51,3.51c-0.39-0.39-1.02-0.39-1.41,0l0,0 C1.71,3.91,1.71,4.54,2.1,4.93z"
}))));

const MaterialAutoFixOffRounded = (styled.default || styled)(MaterialAutoFixOffRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialAutoFixOffRounded;
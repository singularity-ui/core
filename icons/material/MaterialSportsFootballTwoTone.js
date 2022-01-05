import React from 'react';
import styled from 'styled-components';

const MaterialSportsFootballTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M16.26,5c-0.35,0-0.8,0.01-1.33,0.06l4.03,4.03c0.14-1.63,0.01-3.07-0.17-3.86C18.28,5.12,17.4,5,16.26,5z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.21,18.77C5.72,18.88,6.6,19,7.74,19c0.34,0,0.79-0.01,1.3-0.05l-4.01-4.01 C4.91,16.56,5.03,17.98,5.21,18.77z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.87,7.87c-1.28,1.28-2.03,2.97-2.45,4.65l6.04,6.04c1.6-0.39,3.33-1.11,4.66-2.44 c1.28-1.28,2.03-2.95,2.44-4.63l-6.05-6.05C10.92,5.83,9.2,6.55,7.87,7.87z M15.5,9.9l-5.6,5.6l-1.4-1.4l5.6-5.6L15.5,9.9z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.31,3.69C19.99,3.36,18.37,3,16.26,3c-3.03,0-7.09,0.75-9.8,3.46C1.87,11.05,2.9,19.52,3.69,20.31 C4.01,20.64,5.63,21,7.74,21c3.03,0,7.09-0.75,9.8-3.46C22.13,12.95,21.1,4.48,20.31,3.69z M7.74,19c-1.14,0-2.02-0.12-2.53-0.23 c-0.18-0.79-0.3-2.21-0.17-3.83l4.01,4.01C8.53,18.99,8.08,19,7.74,19z M16.13,16.13c-1.33,1.33-3.06,2.05-4.66,2.44l-6.04-6.04 c0.42-1.68,1.16-3.37,2.45-4.65c1.32-1.32,3.05-2.04,4.64-2.43l6.05,6.05C18.15,13.17,17.4,14.85,16.13,16.13z M18.96,9.09 l-4.03-4.03C15.45,5.01,15.91,5,16.26,5c1.14,0,2.02,0.12,2.53,0.23C18.97,6.02,19.09,7.45,18.96,9.09z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1.98",
  transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12.0001)",
  width: "7.92",
  x: "8.04",
  y: "11.01"
}))));

const MaterialSportsFootballTwoTone = (styled.default || styled)(MaterialSportsFootballTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSportsFootballTwoTone;
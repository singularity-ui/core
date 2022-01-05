import React from 'react';
import styled from 'styled-components';

const MaterialPestControlRodentRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M21.31,17.38l-2.39-2.13C19.44,12.89,17.56,11,15.5,11c-1.16,0-3.5,0.9-3.5,3.5c0,0.81,0.27,1.55,0.74,2.15 c0.15,0.2,0.14,0.48-0.04,0.66l0,0c-0.21,0.21-0.56,0.19-0.75-0.04C11.35,16.5,11,15.54,11,14.5c0-1.7,0.96-3.17,2.35-3.93 c-0.7-0.36-1.48-0.57-2.28-0.57c-2.38,0-4.37,1.65-4.91,3.87c-1.33-0.39-2.28-1.66-2.15-3.14C4.15,9.16,5.54,8,7.11,8l2,0 c1.58,0,2.75-0.95,2.87-2.25C12.13,4.25,10.96,3,9.5,3H8.05c-0.5,0-0.96,0.34-1.04,0.83C6.91,4.46,7.39,5,8,5h1.5 C9.78,5,10,5.22,10,5.5C10,5.78,9.78,6,9.5,6L7.16,6c-2.67,0-4.99,2.03-5.15,4.7C1.86,13.25,3.62,15.42,6,15.9v0.03 C6,18.73,8.27,21,11.07,21h8.86C21.8,21,22.74,18.66,21.31,17.38z M18,19c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1 C19,18.55,18.55,19,18,19z"
})));

const MaterialPestControlRodentRounded = (styled.default || styled)(MaterialPestControlRodentRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialPestControlRodentRounded;
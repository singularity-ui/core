import React from 'react';
import styled from 'styled-components';

const MaterialCheckroomRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M21.6,18.2L13,11.75v-0.91c1.65-0.49,2.8-2.17,2.43-4.05c-0.26-1.31-1.3-2.4-2.61-2.7c-1.76-0.4-3.37,0.53-4.02,1.98 C8.5,6.74,8.98,7.5,9.71,7.5h0c0.39,0,0.75-0.22,0.9-0.57C10.84,6.38,11.37,6,12,6c0.83,0,1.5,0.67,1.5,1.5 c0,0.84-0.69,1.52-1.53,1.5C11.43,8.99,11,9.45,11,9.99l0,1.76L2.4,18.2C1.63,18.78,2.04,20,3,20h9h9 C21.96,20,22.37,18.78,21.6,18.2z M6,18l6-4.5l6,4.5H6z"
})));

const MaterialCheckroomRounded = (styled.default || styled)(MaterialCheckroomRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialCheckroomRounded;
import React from 'react';
import styled from 'styled-components';

const MaterialNoDrinksRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.49,20.49L3.51,3.51c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41l7.54,7.54L11,14v5H7c-0.55,0-1,0.45-1,1 s0.45,1,1,1h10c0.32,0,0.59-0.16,0.78-0.4l1.3,1.3c0.39,0.39,1.02,0.39,1.41,0C20.88,21.51,20.88,20.88,20.49,20.49z M13,19v-3.17 L16.17,19H13z M7.83,5l-2-2h13.72C20.35,3,21,3.65,21,4.45c0,0.35-0.13,0.7-0.37,0.96l-5.83,6.56L9.83,7h6.74l1.78-2H7.83z"
})));

const MaterialNoDrinksRounded = (styled.default || styled)(MaterialNoDrinksRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialNoDrinksRounded;
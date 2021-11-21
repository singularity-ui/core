import React from 'react';
import styled from 'styled-components';

const MaterialBackpackRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M20,8v12c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2V8c0-1.86,1.28-3.41,3-3.86V3.5C7,2.67,7.67,2,8.5,2h0 C9.33,2,10,2.67,10,3.5V4h4V3.5C14,2.67,14.67,2,15.5,2h0C16.33,2,17,2.67,17,3.5v0.64C18.72,4.59,20,6.14,20,8z M6,13L6,13 c0,0.55,0.45,1,1,1h9v1c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-2c0-0.55-0.45-1-1-1H7C6.45,12,6,12.45,6,13z"
})))));

const MaterialBackpackRounded = (styled.default || styled)(MaterialBackpackRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialBackpackRounded;
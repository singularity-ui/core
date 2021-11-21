import React from 'react';
import styled from 'styled-components';

const MaterialBentoOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M20,5H4C2.9,5,2,5.9,2,7v10c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M20,11h-6V7h6V11z M4,7h8v10H4V7z M14,17v-4h6v4H14z M9.5,12c0,0.83-0.67,1.5-1.5,1.5S6.5,12.83,6.5,12s0.67-1.5,1.5-1.5S9.5,11.17,9.5,12z"
})));

const MaterialBentoOutlined = (styled.default || styled)(MaterialBentoOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialBentoOutlined;
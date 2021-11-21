import React from 'react';
import styled from 'styled-components';

const MaterialOutboundRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  x: "0",
  y: "0"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M13.88,11.54l-4.25,4.25 c-0.39,0.39-1.02,0.39-1.41,0l0,0c-0.39-0.39-0.39-1.02,0-1.41l4.25-4.25L11.2,8.86C10.88,8.54,11.11,8,11.55,8l3.94,0 c0.28,0,0.5,0.22,0.5,0.5l0,3.94c0,0.45-0.54,0.67-0.85,0.35L13.88,11.54z"
}), /*#__PURE__*/React.createElement("g", null), /*#__PURE__*/React.createElement("g", null), /*#__PURE__*/React.createElement("g", null));

const MaterialOutboundRounded = (styled.default || styled)(MaterialOutboundRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialOutboundRounded;
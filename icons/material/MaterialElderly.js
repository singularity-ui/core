import React from 'react';
import styled from 'styled-components';

const MaterialElderlySvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.5,5.5c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S12.4,5.5,13.5,5.5z M20,12.5V23h-1V12.5c0-0.28-0.22-0.5-0.5-0.5 S18,12.22,18,12.5v1h-1v-0.69c-1.46-0.38-2.7-1.29-3.51-2.52C13.18,11.16,13,12.07,13,13c0,0.23,0.02,0.46,0.03,0.69L15,16.5V23h-2 v-5l-1.78-2.54L11,19l-3,4l-1.6-1.2L9,18.33V13c0-1.15,0.18-2.29,0.5-3.39L8,10.46V14H6V9.3l5.4-3.07l0,0.01 c0.59-0.31,1.32-0.33,1.94,0.03c0.36,0.21,0.63,0.51,0.8,0.85l0,0l0.79,1.67C15.58,10.1,16.94,11,18.5,11C19.33,11,20,11.67,20,12.5 z"
}));

const MaterialElderly = (styled.default || styled)(MaterialElderlySvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialElderly;
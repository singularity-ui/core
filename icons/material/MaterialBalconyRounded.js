import React from 'react';
import styled from 'styled-components';

const MaterialBalconyRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M20,14.27V10c0-4.42-3.58-8-8-8s-8,3.58-8,8v4.27C3.4,14.61,3,15.26,3,16v4c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-4 C21,15.26,20.6,14.61,20,14.27z M7,20H5v-4h2V20z M11,20H9v-4h2V20z M11,14H6v-4c0-2.97,2.16-5.44,5-5.92V14z M13,4.08 c2.84,0.48,5,2.94,5,5.92v4h-5V4.08z M15,20h-2v-4h2V20z M19,20h-2v-4h2V20z M8,11c0-0.55,0.45-1,1-1s1,0.45,1,1s-0.45,1-1,1 S8,11.55,8,11z M16,11c0,0.55-0.45,1-1,1s-1-0.45-1-1s0.45-1,1-1S16,10.45,16,11z"
}));

const MaterialBalconyRounded = (styled.default || styled)(MaterialBalconyRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialBalconyRounded;
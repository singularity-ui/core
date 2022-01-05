import React from 'react';
import styled from 'styled-components';

const MaterialCodeOffRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M19.17,12l-3.88-3.88c-0.39-0.39-0.39-1.02,0-1.41l0,0c0.39-0.39,1.02-0.39,1.41,0l4.59,4.59c0.39,0.39,0.39,1.02,0,1.41 l-2.88,2.88L17,14.17L19.17,12z M2.1,4.93l3.49,3.49l-2.88,2.88c-0.39,0.39-0.39,1.02,0,1.41l4.59,4.59c0.39,0.39,1.02,0.39,1.41,0 l0,0c0.39-0.39,0.39-1.02,0-1.41L4.83,12L7,9.83L19.07,21.9c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41L3.51,3.51 c-0.39-0.39-1.02-0.39-1.41,0l0,0C1.71,3.91,1.71,4.54,2.1,4.93z"
}));

const MaterialCodeOffRounded = (styled.default || styled)(MaterialCodeOffRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialCodeOffRounded;
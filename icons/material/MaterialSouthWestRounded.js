import React from 'react';
import styled from 'styled-components';

const MaterialSouthWestRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15,18L15,18c0-0.56-0.45-1-1-1H8.41L19.3,6.11c0.39-0.39,0.39-1.02,0-1.41l0,0c-0.39-0.39-1.02-0.39-1.41,0L7,15.59V10 c0-0.55-0.45-1-1-1H6c-0.55,0-1,0.45-1,1V18c0,0.55,0.45,1,1,1H14C14.55,19,15,18.55,15,18z"
}));

const MaterialSouthWestRounded = (styled.default || styled)(MaterialSouthWestRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSouthWestRounded;
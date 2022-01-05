import React from 'react';
import styled from 'styled-components';

const MaterialFileDownloadOffRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M9,6.17V4c0-0.55,0.45-1,1-1h4c0.55,0,1,0.45,1,1v5h1.59c0.89,0,1.33,1.08,0.7,1.71l-1.88,1.88L9,6.17z M20.49,20.49 L3.51,3.51c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41l4.5,4.5c-0.26,0.37-0.28,0.91,0.1,1.28l4.59,4.59 c0.35,0.35,0.88,0.37,1.27,0.09L15.17,18H6c-0.55,0-1,0.45-1,1s0.45,1,1,1h11.17l1.9,1.9c0.39,0.39,1.02,0.39,1.41,0 C20.88,21.51,20.88,20.88,20.49,20.49z"
}));

const MaterialFileDownloadOffRounded = (styled.default || styled)(MaterialFileDownloadOffRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialFileDownloadOffRounded;
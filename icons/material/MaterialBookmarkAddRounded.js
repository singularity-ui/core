import React from 'react';
import styled from 'styled-components';

const MaterialBookmarkAddRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M21,6c0,0.55-0.45,1-1,1h-1v1c0,0.55-0.45,1-1,1s-1-0.45-1-1V7h-1c-0.55,0-1-0.45-1-1s0.45-1,1-1h1V4c0-0.55,0.45-1,1-1 s1,0.45,1,1v1h1C20.55,5,21,5.45,21,6z M19,19.48c0,0.72-0.73,1.2-1.39,0.92L12,18l-5.61,2.4C5.73,20.69,5,20.2,5,19.48V5 c0-1.1,0.9-2,2-2l7,0c-0.63,0.84-1,1.87-1,3c0,2.76,2.24,5,5,5c0.34,0,0.68-0.03,1-0.1V19.48z"
}));

const MaterialBookmarkAddRounded = (styled.default || styled)(MaterialBookmarkAddRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialBookmarkAddRounded;
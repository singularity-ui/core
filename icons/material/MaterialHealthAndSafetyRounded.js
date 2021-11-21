import React from 'react';
import styled from 'styled-components';

const MaterialHealthAndSafetyRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.5,13h-1C8.67,13,8,12.33,8,11.5v0C8,10.67,8.67,10,9.5,10h1V9c0-0.83,0.67-1.5,1.5-1.5h0c0.83,0,1.5,0.67,1.5,1.5v1h1 c0.83,0,1.5,0.67,1.5,1.5v0c0,0.83-0.67,1.5-1.5,1.5h-1v1c0,0.83-0.67,1.5-1.5,1.5h0c-0.83,0-1.5-0.67-1.5-1.5V13z M11.3,2.26 l-6,2.25C4.52,4.81,4,5.55,4,6.39v4.7c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91v-4.7c0-0.83-0.52-1.58-1.3-1.87l-6-2.25 C12.25,2.09,11.75,2.09,11.3,2.26z"
}));

const MaterialHealthAndSafetyRounded = (styled.default || styled)(MaterialHealthAndSafetyRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialHealthAndSafetyRounded;
import React from 'react';
import styled from 'styled-components';

const MaterialTransgenderRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M21.5,1h-4c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h1.58l-3.97,3.97C14.23,6.36,13.16,6,12,6S9.77,6.36,8.89,6.97L8.24,6.32 l0.7-0.7c0.39-0.39,0.39-1.02,0-1.41c-0.39-0.39-1.02-0.39-1.41,0l-0.7,0.7L4.92,3H6.5c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1h-4 c-0.55,0-1,0.45-1,1v4c0,0.55,0.45,1,1,1s1-0.45,1-1V4.42l1.91,1.9L4.7,7.03c-0.39,0.39-0.39,1.02,0,1.41s1.02,0.39,1.41,0 l0.71-0.71l0.65,0.65C6.86,9.27,6.5,10.34,6.5,11.5c0,2.7,1.94,4.94,4.5,5.41V19h-1c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h1v1 c0,0.55,0.45,1,1,1s1-0.45,1-1v-1h1c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1h-1v-2.09c2.56-0.47,4.5-2.71,4.5-5.41 c0-1.16-0.36-2.23-0.97-3.12l3.97-3.96V6c0,0.55,0.45,1,1,1s1-0.45,1-1V2C22.5,1.45,22.05,1,21.5,1z M12,15 c-1.93,0-3.5-1.57-3.5-3.5C8.5,9.57,10.07,8,12,8s3.5,1.57,3.5,3.5C15.5,13.43,13.93,15,12,15z"
}));

const MaterialTransgenderRounded = (styled.default || styled)(MaterialTransgenderRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialTransgenderRounded;
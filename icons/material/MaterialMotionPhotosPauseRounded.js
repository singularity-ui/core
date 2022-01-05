import React from 'react';
import styled from 'styled-components';

const MaterialMotionPhotosPauseRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M4,9L4,9c0.26,0.26,0.34,0.63,0.25,0.98c-0.35,1.36-0.36,2.87,0.1,4.38c0.88,2.91,3.44,5.1,6.44,5.55 c5.52,0.81,10.19-4.06,9.03-9.62c-0.65-3.13-3.23-5.61-6.37-6.16c-1.21-0.21-2.38-0.15-3.46,0.13C9.64,4.35,9.26,4.26,9.01,4.01l0,0 C8.45,3.45,8.73,2.52,9.48,2.32c1.47-0.38,3.06-0.44,4.7-0.09c3.98,0.86,7.09,4.18,7.7,8.2c1.04,6.81-4.82,12.58-11.64,11.42 C6.23,21.16,2.98,17.99,2.2,14c-0.31-1.59-0.24-3.12,0.12-4.53C2.52,8.72,3.45,8.45,4,9z M7,5.5C7,6.33,6.33,7,5.5,7S4,6.33,4,5.5 S4.67,4,5.5,4S7,4.67,7,5.5z M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6S15.31,6,12,6z M10,15L10,15c-0.55,0-1-0.45-1-1v-4 c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v4C11,14.55,10.55,15,10,15z M14,15L14,15c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h0 c0.55,0,1,0.45,1,1v4C15,14.55,14.55,15,14,15z"
}));

const MaterialMotionPhotosPauseRounded = (styled.default || styled)(MaterialMotionPhotosPauseRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialMotionPhotosPauseRounded;
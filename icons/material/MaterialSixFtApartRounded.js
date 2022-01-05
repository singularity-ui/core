import React from 'react';
import styled from 'styled-components';

const MaterialSixFtApartRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  x: "0"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6,6c1.1,0,2-0.9,2-2S7.1,2,6,2S4,2.9,4,4S4.9,6,6,6z M10,9.43c0-0.81-0.48-1.53-1.22-1.85C7.93,7.21,6.99,7,6,7 C5.01,7,4.07,7.21,3.22,7.58C2.48,7.9,2,8.62,2,9.43V10h8V9.43z M18,6c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S16.9,6,18,6z M22,9.43 c0-0.81-0.48-1.53-1.22-1.85C19.93,7.21,18.99,7,18,7c-0.99,0-1.93,0.21-2.78,0.58C14.48,7.9,14,8.62,14,9.43V10h8V9.43z M21.65,14.35l-1.79,1.79C19.54,16.46,19,16.24,19,15.79v-0.8L5,15v0.79c0,0.45-0.54,0.67-0.85,0.35l-1.79-1.79 c-0.2-0.2-0.2-0.51,0-0.71l1.79-1.79C4.46,11.54,5,11.76,5,12.21v0.8L19,13v-0.79c0-0.45,0.54-0.67,0.85-0.35l1.79,1.79 C21.84,13.84,21.84,14.16,21.65,14.35z M10,18.5L10,18.5c0-0.28-0.22-0.5-0.5-0.5h-2C7.22,18,7,18.22,7,18.5v3 C7,21.78,7.22,22,7.5,22h2c0.28,0,0.5-0.22,0.5-0.5V20c0-0.28-0.22-0.5-0.5-0.5H8V19h1.5C9.78,19,10,18.78,10,18.5z M9,20.5V21H8 v-0.5H9z M17,19h-0.5v2.5c0,0.28-0.22,0.5-0.5,0.5h0c-0.28,0-0.5-0.22-0.5-0.5V19H15c-0.28,0-0.5-0.22-0.5-0.5v0 c0-0.28,0.22-0.5,0.5-0.5h2c0.28,0,0.5,0.22,0.5,0.5v0C17.5,18.78,17.28,19,17,19z M14,18.5c0,0.28-0.22,0.5-0.5,0.5h-1v0.5H13 c0.28,0,0.5,0.22,0.5,0.5c0,0.28-0.22,0.5-0.5,0.5h-0.5v1c0,0.28-0.22,0.5-0.5,0.5c-0.28,0-0.5-0.22-0.5-0.5v-3 c0-0.28,0.22-0.5,0.5-0.5h1.5C13.78,18,14,18.22,14,18.5z"
}));

const MaterialSixFtApartRounded = (styled.default || styled)(MaterialSixFtApartRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSixFtApartRounded;
import React from 'react';
import styled from 'styled-components';

const MaterialMicrowaveRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M6.15,9.97L6.15,9.97C5.69,9.51,5.77,8.73,6.33,8.4C6.73,8.18,7.21,8,7.75,8c0.8,0,1.39,0.39,1.81,0.67 C9.87,8.88,10.07,9,10.25,9c0.13,0,0.26-0.05,0.39-0.12c0.39-0.22,0.88-0.16,1.2,0.16l0,0c0.46,0.46,0.38,1.24-0.18,1.56 c-0.39,0.23-0.87,0.4-1.41,0.4c-0.79,0-1.37-0.38-1.79-0.66C8.13,10.12,7.94,10,7.75,10c-0.13,0-0.26,0.05-0.39,0.12 C6.96,10.35,6.47,10.28,6.15,9.97z M7.75,15c0.19,0,0.38,0.12,0.71,0.34c0.42,0.28,1,0.66,1.79,0.66c0.54,0,1.02-0.17,1.41-0.4 c0.56-0.32,0.64-1.1,0.18-1.56l0,0c-0.32-0.32-0.81-0.38-1.2-0.16C10.51,13.95,10.38,14,10.25,14c-0.18,0-0.38-0.12-0.69-0.33 C9.14,13.39,8.55,13,7.75,13c-0.54,0-1.02,0.18-1.42,0.4c-0.56,0.33-0.64,1.11-0.18,1.56l0,0c0.32,0.32,0.81,0.38,1.2,0.16 C7.49,15.05,7.62,15,7.75,15z M22,6v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h16C21.1,4,22,4.9,22,6z M14,6H4v12h10 V6z M19,16c0-0.55-0.45-1-1-1c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1C18.55,17,19,16.55,19,16z M19,12c0-0.55-0.45-1-1-1 c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1C18.55,13,19,12.55,19,12z M19,7h-2v2h2V7z"
}));

const MaterialMicrowaveRounded = (styled.default || styled)(MaterialMicrowaveRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialMicrowaveRounded;
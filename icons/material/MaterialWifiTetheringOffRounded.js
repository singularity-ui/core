import React from 'react';
import styled from 'styled-components';

const MaterialWifiTetheringOffRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M2.11,3.51L2.11,3.51C1.71,3.9,1.71,4.54,2.1,4.93l1.98,1.98C2.78,8.6,2,10.71,2,13c0,2.36,0.82,4.53,2.19,6.24 c0.37,0.47,1.07,0.5,1.5,0.08l0,0c0.36-0.36,0.39-0.92,0.08-1.32C4.66,16.63,4,14.89,4,13c0-1.75,0.57-3.35,1.51-4.66l1.43,1.43 C6.35,10.7,6,11.81,6,13c0,1.25,0.38,2.4,1.03,3.35c0.34,0.5,1.08,0.54,1.51,0.11l0,0c0.35-0.35,0.37-0.88,0.1-1.29 C8.24,14.54,8,13.8,8,13c0-0.63,0.15-1.23,0.41-1.76l1.61,1.61c0,0.05-0.02,0.1-0.02,0.15c0,0.55,0.23,1.05,0.59,1.41 C10.95,14.77,11.45,15,12,15c0.05,0,0.1-0.01,0.16-0.02l6.91,6.91c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41 L3.51,3.51C3.12,3.12,2.49,3.12,2.11,3.51z M17.7,14.87C17.89,14.28,18,13.65,18,13c0-3.31-2.69-6-6-6c-0.65,0-1.28,0.1-1.87,0.3 l1.71,1.71C11.89,9,11.95,9,12,9c2.21,0,4,1.79,4,4c0,0.05,0,0.11-0.01,0.16L17.7,14.87z M12,5c4.42,0,8,3.58,8,8 c0,1.22-0.27,2.37-0.77,3.4l1.49,1.49C21.53,16.45,22,14.78,22,13c0-5.52-4.48-10-10-10c-1.78,0-3.44,0.46-4.89,1.28l1.48,1.48 C9.63,5.27,10.78,5,12,5z"
}))));

const MaterialWifiTetheringOffRounded = (styled.default || styled)(MaterialWifiTetheringOffRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialWifiTetheringOffRounded;
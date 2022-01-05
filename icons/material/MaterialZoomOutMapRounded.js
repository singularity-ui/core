import React from 'react';
import styled from 'styled-components';

const MaterialZoomOutMapRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M15.85,3.85L17.3,5.3l-2.18,2.16c-0.39,0.39-0.39,1.03,0,1.42l0,0c0.39,0.39,1.03,0.39,1.42,0L18.7,6.7l1.45,1.45 C20.46,8.46,21,8.24,21,7.79V3.5C21,3.22,20.78,3,20.5,3h-4.29C15.76,3,15.54,3.54,15.85,3.85z M3.85,8.15L5.3,6.7l2.16,2.18 c0.39,0.39,1.03,0.39,1.42,0l0,0c0.39-0.39,0.39-1.03,0-1.42L6.7,5.3l1.45-1.45C8.46,3.54,8.24,3,7.79,3H3.5 C3.22,3,3,3.22,3,3.5v4.29C3,8.24,3.54,8.46,3.85,8.15z M8.15,20.15L6.7,18.7l2.18-2.16c0.39-0.39,0.39-1.03,0-1.42l0,0 c-0.39-0.39-1.03-0.39-1.42,0L5.3,17.3l-1.45-1.45C3.54,15.54,3,15.76,3,16.21v4.29C3,20.78,3.22,21,3.5,21h4.29 C8.24,21,8.46,20.46,8.15,20.15z M20.15,15.85L18.7,17.3l-2.16-2.18c-0.39-0.39-1.03-0.39-1.42,0l0,0 c-0.39,0.39-0.39,1.03,0,1.42l2.18,2.16l-1.45,1.45C15.54,20.46,15.76,21,16.21,21h4.29c0.28,0,0.5-0.22,0.5-0.5v-4.29 C21,15.76,20.46,15.54,20.15,15.85z"
}))))));

const MaterialZoomOutMapRounded = (styled.default || styled)(MaterialZoomOutMapRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialZoomOutMapRounded;
import React from 'react';
import styled from 'styled-components';

const MaterialVideoSettingsSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "3,6 21,6 21,11 23,11 23,4 1,4 1,20 12,20 12,18 3,18"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "15,12 9,8 9,16"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22.72,17.57l1.23-0.98l-1.25-2.17L21.23,15c-0.23-0.17-0.48-0.31-0.75-0.42L20.25,13h-2.5l-0.24,1.58 c-0.26,0.11-0.51,0.26-0.74,0.42l-1.48-0.58l-1.25,2.17l1.24,0.99c-0.03,0.29-0.04,0.58-0.01,0.86l-1.23,0.98l1.25,2.17L16.77,21 c0.23,0.17,0.48,0.31,0.75,0.42L17.75,23h2.5l0.24-1.58c0.26-0.11,0.51-0.26,0.74-0.42l1.48,0.58l1.25-2.17l-1.24-0.99 C22.75,18.14,22.75,17.85,22.72,17.57z M19,19.5c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S19.83,19.5,19,19.5z"
}))));

const MaterialVideoSettingsSharp = (styled.default || styled)(MaterialVideoSettingsSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialVideoSettingsSharp;
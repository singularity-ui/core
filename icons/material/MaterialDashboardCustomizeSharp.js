import React from 'react';
import styled from 'styled-components';

const MaterialDashboardCustomizeSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M3,3h8v8H3V3z M13,3h8v8h-8V3z M3,13h8v8H3V13z M18,13h-2v3h-3v2h3v3h2v-3h3v-2h-3V13z"
})));

const MaterialDashboardCustomizeSharp = (styled.default || styled)(MaterialDashboardCustomizeSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialDashboardCustomizeSharp;
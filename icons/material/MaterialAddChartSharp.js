import React from 'react';
import styled from 'styled-components';

const MaterialAddchartSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11,9h2v8h-2V9z M9,17v-6H7v6H9z M19,19H5V5h6V3H3v18h18v-8h-2V19z M15,13v4h2v-4H15z M19,5V2h-2v3h-3v2h3v3h2V7h3V5H19z"
})), /*#__PURE__*/React.createElement("g", null));

const MaterialAddchartSharp = (styled.default || styled)(MaterialAddchartSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialAddchartSharp;
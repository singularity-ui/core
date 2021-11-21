import React from 'react';
import styled from 'styled-components';

const MaterialOneKPlusSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M21,3H3v18h18V3z M9,15H7.5v-4.5H6V9h3V15z M13.75,15L12,12.75V15h-1.5V9H12v2.25L13.75,9h1.75l-2.25,3l2.25,3H13.75z M19,12.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V12.5z"
})));

const MaterialOneKPlusSharp = (styled.default || styled)(MaterialOneKPlusSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialOneKPlusSharp;
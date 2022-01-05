import React from 'react';
import styled from 'styled-components';

const MaterialHeightKPlusSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M7.5,12.5h1V14h-1V12.5z M7.5,10h1v1.5h-1V10z M21,3H3v18h18V3z M10,14c0,0.55-0.45,1-1,1H7c-0.55,0-1-0.45-1-1v-4 c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1V14z M16,15h-1.75l-1.75-2.25V15H11V9h1.5v2.25L14.25,9H16l-2.25,3L16,15z M19,12.5h-1.5V14 h-1v-1.5H15v-1h1.5V10h1v1.5H19V12.5z"
})));

const MaterialHeightKPlusSharp = (styled.default || styled)(MaterialHeightKPlusSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialHeightKPlusSharp;
import React from 'react';
import styled from 'styled-components';

const MaterialSystemSecurityUpdateSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3c0-1.1-0.9-2-2-2H7C5.9,1,5,1.9,5,3z M17,18H7V6h10V18z M16,12h-3V8h-2v4H8 l4,4L16,12z"
})));

const MaterialSystemSecurityUpdate = (styled.default || styled)(MaterialSystemSecurityUpdateSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSystemSecurityUpdate;
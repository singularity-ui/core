import React from 'react';
import styled from 'styled-components';

const MaterialAccountTreeSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("polygon", {
  points: "22,11 22,3 15,3 15,6 9,6 9,3 2,3 2,11 9,11 9,8 11,8 11,18 15,18 15,21 22,21 22,13 15,13 15,16 13,16 13,8 15,8 15,11"
}));

const MaterialAccountTreeSharp = (styled.default || styled)(MaterialAccountTreeSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialAccountTreeSharp;
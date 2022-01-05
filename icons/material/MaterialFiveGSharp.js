import React from 'react';
import styled from 'styled-components';

const MaterialFiveGSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  points: "17,13 19,13 19,15 14,15 14,9 21,9 21,7 12,7 12,17 21,17 21,11 17,11"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "3,13 8,13 8,15 3,15 3,17 10,17 10,11 5,11 5,9 10,9 10,7 3,7"
}))));

const MaterialFiveGSharp = (styled.default || styled)(MaterialFiveGSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialFiveGSharp;
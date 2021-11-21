import React from 'react';
import styled from 'styled-components';

const MaterialReadMoreSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "9",
  x: "13",
  y: "7"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "9",
  x: "13",
  y: "15"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "6",
  x: "16",
  y: "11"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "13,12 8,7 8,11 2,11 2,13 8,13 8,17"
}))));

const MaterialReadMoreSharp = (styled.default || styled)(MaterialReadMoreSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialReadMoreSharp;
import React from 'react';
import styled from 'styled-components';

const MaterialGridViewSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  height: "8",
  width: "8",
  x: "3",
  y: "3"
}), /*#__PURE__*/React.createElement("rect", {
  height: "8",
  width: "8",
  x: "3",
  y: "13"
}), /*#__PURE__*/React.createElement("rect", {
  height: "8",
  width: "8",
  x: "13",
  y: "3"
}), /*#__PURE__*/React.createElement("rect", {
  height: "8",
  width: "8",
  x: "13",
  y: "13"
}))));

const MaterialGridViewSharp = (styled.default || styled)(MaterialGridViewSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialGridViewSharp;
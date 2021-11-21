import React from 'react';
import styled from 'styled-components';

const MaterialSmartScreenSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  y: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M1,5v14h22V5H1z M18,17H6V7h12V17z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1.5",
  width: "1.5",
  x: "12.5",
  y: "11.25"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1.5",
  width: "1.5",
  x: "15",
  y: "11.25"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1.5",
  width: "1.5",
  x: "10",
  y: "11.25"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1.5",
  width: "1.5",
  x: "7.5",
  y: "11.25"
}))));

const MaterialSmartScreenSharp = (styled.default || styled)(MaterialSmartScreenSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSmartScreenSharp;
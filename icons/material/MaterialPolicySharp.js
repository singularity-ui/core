import React from 'react';
import styled from 'styled-components';

const MaterialPolicySharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M21,5l-9-4L3,5v6c0,5.55,3.84,10.74,9,12c2.3-0.56,4.33-1.9,5.88-3.71l-3.12-3.12c-1.94,1.29-4.58,1.07-6.29-0.64 c-1.95-1.95-1.95-5.12,0-7.07c1.95-1.95,5.12-1.95,7.07,0c1.71,1.71,1.92,4.35,0.64,6.29l2.9,2.9C20.29,15.69,21,13.38,21,11V5z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}))));

const MaterialPolicySharp = (styled.default || styled)(MaterialPolicySharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialPolicySharp;
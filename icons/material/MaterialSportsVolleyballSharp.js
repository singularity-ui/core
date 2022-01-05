import React from 'react';
import styled from 'styled-components';

const MaterialSportsVolleyballSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M6,4.01C3.58,5.84,2,8.73,2,12c0,1.46,0.32,2.85,0.89,4.11L6,14.31V4.01z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11,11.42V2.05C9.94,2.16,8.93,2.43,8,2.84v10.32L11,11.42z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,13.15l-8.11,4.68c0.61,0.84,1.34,1.59,2.18,2.2L15,14.89L12,13.15z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13,7.96v3.46l8.11,4.68c0.42-0.93,0.7-1.93,0.82-2.98L13,7.96z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.07,21.2C9.28,21.71,10.6,22,12,22c3.34,0,6.29-1.65,8.11-4.16L17,16.04L8.07,21.2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.92,10.81c-0.55-4.63-4.26-8.3-8.92-8.76v3.6L21.92,10.81z"
}))));

const MaterialSportsVolleyballSharp = (styled.default || styled)(MaterialSportsVolleyballSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSportsVolleyballSharp;
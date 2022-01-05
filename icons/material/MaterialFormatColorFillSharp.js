import React from 'react';
import styled from 'styled-components';

const MaterialFormatColorFillSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M10,17.62L17.62,10l-10-10L6.21,1.41l2.38,2.38L2.38,10L10,17.62z M10,5.21L14.79,10H5.21 L10,5.21z",
  enableSource: "new"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,17c1.1,0,2-0.9,2-2c0-1.33-2-3.5-2-3.5s-2,2.17-2,3.5C17,16.1,17.9,17,19,17z",
  enableSource: "new"
}), /*#__PURE__*/React.createElement("rect", {
  enableSource: "new",
  height: "4",
  width: "20",
  x: "2",
  y: "20"
}))));

const MaterialFormatColorFillSharp = (styled.default || styled)(MaterialFormatColorFillSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialFormatColorFillSharp;
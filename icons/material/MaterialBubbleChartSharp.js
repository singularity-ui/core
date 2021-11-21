import React from 'react';
import styled from 'styled-components';

const MaterialBubbleChartSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("circle", {
  cx: "7.2",
  cy: "14.4",
  r: "3.2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "14.8",
  cy: "18",
  r: "2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "15.2",
  cy: "8.8",
  r: "4.8"
}));

const MaterialBubbleChartSharp = (styled.default || styled)(MaterialBubbleChartSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialBubbleChartSharp;
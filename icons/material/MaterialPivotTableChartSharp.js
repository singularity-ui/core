import React from 'react';
import styled from 'styled-components';

const MaterialPivotTableChartSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "5",
  width: "11",
  x: "10",
  y: "3"
}), /*#__PURE__*/React.createElement("rect", {
  height: "11",
  width: "5",
  x: "3",
  y: "10"
}), /*#__PURE__*/React.createElement("rect", {
  height: "5",
  width: "5",
  x: "3",
  y: "3"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "18,9 14,13 17,13 17,17 13,17 13,14 9,18 13,22 13,19 19,19 19,13 22,13"
}))));

const MaterialPivotTableChartSharp = (styled.default || styled)(MaterialPivotTableChartSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialPivotTableChartSharp;
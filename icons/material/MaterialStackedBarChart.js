import React from 'react';
import styled from 'styled-components';

const MaterialStackedBarChartSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 10h3v10H6zm0-5h3v4H6zm10 11h3v4h-3zm0-3h3v2h-3zm-5 0h3v7h-3zm0-4h3v3h-3z"
}));

const MaterialStackedBarChart = (styled.default || styled)(MaterialStackedBarChartSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialStackedBarChart;
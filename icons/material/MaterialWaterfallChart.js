import React from 'react';
import styled from 'styled-components';

const MaterialWaterfallChartSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 4h3v16h-3zM3 13h3v7H3zm11-9h3v3h-3zm-4 1h3v4h-3zm-3 5h3v4H7z"
}));

const MaterialWaterfallChart = (styled.default || styled)(MaterialWaterfallChartSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialWaterfallChart;
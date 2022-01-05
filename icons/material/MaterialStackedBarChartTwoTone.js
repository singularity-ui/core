import React from 'react';
import styled from 'styled-components';

const MaterialStackedBarChartTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M6,10h3v10H6V10z M6,5h3v4H6V5z M16,16h3v4h-3V16z M16,13h3v2h-3V13z M11,13h3v7h-3V13z M11,9h3v3h-3V9z"
})));

const MaterialStackedBarChartTwoTone = (styled.default || styled)(MaterialStackedBarChartTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialStackedBarChartTwoTone;
import React from 'react';
import styled from 'styled-components';

const MaterialBarChartTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 9.2h3V19H5zM16.2 13H19v6h-2.8zm-5.6-8h2.8v14h-2.8z"
}));

const MaterialBarChartTwoTone = (styled.default || styled)(MaterialBarChartTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialBarChartTwoTone;
import React from 'react';
import styled from 'styled-components';

const MaterialSignalCellular_0BarSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,6.83V20H6.83L20,6.83 M22,2L2,22h20V2L22,2z"
}));

const MaterialSignalCellular_0Bar = (styled.default || styled)(MaterialSignalCellular_0BarSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSignalCellular_0Bar;
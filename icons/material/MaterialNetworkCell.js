import React from 'react';
import styled from 'styled-components';

const MaterialNetworkCellSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M2,22h20V2L2,22z M20,20h-3V9.83l3-3V20z"
}));

const MaterialNetworkCell = (styled.default || styled)(MaterialNetworkCellSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialNetworkCell;
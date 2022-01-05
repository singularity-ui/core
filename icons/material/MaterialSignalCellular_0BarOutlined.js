import React from 'react';
import styled from 'styled-components';

const MaterialSignalCellular_0BarOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M2,22h20V2L2,22z M20,20H6.83L20,6.83V20z"
})));

const MaterialSignalCellular_0BarOutlined = (styled.default || styled)(MaterialSignalCellular_0BarOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSignalCellular_0BarOutlined;
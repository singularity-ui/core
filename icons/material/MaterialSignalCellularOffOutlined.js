import React from 'react';
import styled from 'styled-components';

const MaterialSignalCellularOffOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 1l-8.31 8.31 8.31 8.3zM4.91 4.36L3.5 5.77l6.36 6.37L1 21h17.73l2 2 1.41-1.41z"
}));

const MaterialSignalCellularOffOutlined = (styled.default || styled)(MaterialSignalCellularOffOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSignalCellularOffOutlined;
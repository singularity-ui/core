import React from 'react';
import styled from 'styled-components';

const MaterialExpandOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "16",
  x: "4",
  y: "20"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "16",
  x: "4",
  y: "2"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "9.41,13.59 8,15 12,19 16,15 14.59,13.59 13,15.17 13,8.83 14.59,10.41 16,9 12,5 8,9 9.41,10.41 11,8.83 11,15.17"
}))));

const MaterialExpandOutlined = (styled.default || styled)(MaterialExpandOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialExpandOutlined;
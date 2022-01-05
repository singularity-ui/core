import React from 'react';
import styled from 'styled-components';

const MaterialGarageSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
  cx: "15",
  cy: "13",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "13",
  r: "1"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "8.33,7.5 7.67,9.5 16.33,9.5 15.67,7.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22,2H2v20h20V2z M19,18.5h-2v-2H7v2H5v-7.31L6.89,5.5h10.21L19,11.19V18.5z"
}))));

const MaterialGarageSharp = (styled.default || styled)(MaterialGarageSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialGarageSharp;
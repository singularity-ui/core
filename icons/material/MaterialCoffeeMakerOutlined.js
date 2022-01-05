import React from 'react';
import styled from 'styled-components';

const MaterialCoffeeMakerOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M18,6V4h2V2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h14v-2h-4.03C17.2,19.09,18,17.64,18,16v-5H8v5c0,1.64,0.81,3.09,2.03,4 H6V4h2v2c0,0.55,0.45,1,1,1h8C17.55,7,18,6.55,18,6z M10,16v-3h6v3c0,1.65-1.35,3-3,3S10,17.65,10,16z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "13",
  cy: "9",
  r: "1"
}))));

const MaterialCoffeeMakerOutlined = (styled.default || styled)(MaterialCoffeeMakerOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialCoffeeMakerOutlined;
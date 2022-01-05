import React from 'react';
import styled from 'styled-components';

const MaterialCasinoOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "7.5",
  cy: "16.5",
  r: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "7.5",
  cy: "7.5",
  r: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "16.5",
  cy: "16.5",
  r: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "16.5",
  cy: "7.5",
  r: "1.5"
}));

const MaterialCasinoOutlined = (styled.default || styled)(MaterialCasinoOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialCasinoOutlined;
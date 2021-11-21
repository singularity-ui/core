import React from 'react';
import styled from 'styled-components';

const MaterialBlurLinearTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 16.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "12",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "13",
  cy: "8",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "13",
  cy: "16",
  r: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 12.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "13",
  cy: "12",
  r: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 3h18v2H3z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "5",
  cy: "8",
  r: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "5",
  cy: "12",
  r: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "5",
  cy: "16",
  r: "1.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 8.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "16",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "8",
  r: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 19h18v2H3z"
}));

const MaterialBlurLinearTwoTone = (styled.default || styled)(MaterialBlurLinearTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialBlurLinearTwoTone;
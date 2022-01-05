import React from 'react';
import styled from 'styled-components';

const MaterialShowerTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M12,7c-2.76,0-5,2.24-5,5h10C17,9.24,14.76,7,12,7z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "8",
  cy: "20",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "16",
  cy: "17",
  r: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13,5.08V3h-2v2.08C7.61,5.57,5,8.47,5,12v2h14v-2C19,8.47,16.39,5.57,13,5.08z M7,12c0-2.76,2.24-5,5-5s5,2.24,5,5H7z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "16",
  cy: "20",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "17",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "8",
  cy: "17",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "20",
  r: "1"
}))));

const MaterialShowerTwoTone = (styled.default || styled)(MaterialShowerTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialShowerTwoTone;
import React from 'react';
import styled from 'styled-components';

const MaterialFastForwardTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  opacity: ".3",
  points: "15,9.86 15,14.14 18.03,12"
}), /*#__PURE__*/React.createElement("polygon", {
  opacity: ".3",
  points: "6,9.86 6,14.14 9.03,12"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4,18l8.5-6L4,6V18z M6,9.86L9.03,12L6,14.14V9.86z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.5,12L13,6v12L21.5,12z M15,9.86L18.03,12L15,14.14V9.86z"
}))));

const MaterialFastForwardTwoTone = (styled.default || styled)(MaterialFastForwardTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialFastForwardTwoTone;
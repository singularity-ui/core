import React from 'react';
import styled from 'styled-components';

const MaterialBackupTableTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "5",
  opacity: ".3",
  width: "5",
  x: "11",
  y: "11"
}), /*#__PURE__*/React.createElement("rect", {
  height: "5",
  opacity: ".3",
  width: "5",
  x: "4",
  y: "11"
}), /*#__PURE__*/React.createElement("rect", {
  height: "5",
  opacity: ".3",
  width: "12",
  x: "4",
  y: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,6v14H6v2h14c1.1,0,2-0.9,2-2V6H20z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18,16V4c0-1.1-0.9-2-2-2H4C2.9,2,2,2.9,2,4v12c0,1.1,0.9,2,2,2h12C17.1,18,18,17.1,18,16z M4,4h12v5H4V4z M9,16H4v-5h5 V16z M11,11h5v5h-5V11z"
}))));

const MaterialBackupTableTwoTone = (styled.default || styled)(MaterialBackupTableTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialBackupTableTwoTone;
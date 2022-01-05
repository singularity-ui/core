import React from 'react';
import styled from 'styled-components';

const MaterialInventoryTwoTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  enableSource: "new",
  opacity: ".3",
  points: "4,7 20,7 20,3.98 4,4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5,20h14V9H5V20z M9,12h6v2H9V12z",
  enableSource: "new",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,2H4C3,2,2,2.9,2,4v3.01C2,7.73,2.43,8.35,3,8.7V20c0,1.1,1.1,2,2,2h14c0.9,0,2-0.9,2-2V8.7c0.57-0.35,1-0.97,1-1.69V4 C22,2.9,21,2,20,2z M19,20H5V9h14V20z M20,7H4V4l16-0.02V7z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "6",
  x: "9",
  y: "12"
}))));

const MaterialInventoryTwoTwoTone = (styled.default || styled)(MaterialInventoryTwoTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialInventoryTwoTwoTone;
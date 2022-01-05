import React from 'react';
import styled from 'styled-components';

const MaterialGradingRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M5,7h14c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1H5C4.45,9,4,8.55,4,8v0C4,7.45,4.45,7,5,7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5,13h14c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H5c-0.55,0-1,0.45-1,1v0C4,12.55,4.45,13,5,13z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5,17h5c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H5c-0.55,0-1,0.45-1,1v0C4,16.55,4.45,17,5,17z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5,21h5c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H5c-0.55,0-1,0.45-1,1v0C4,20.55,4.45,21,5,21z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.41,18.17l-0.71-0.71c-0.39-0.39-1.02-0.39-1.41,0l0,0c-0.39,0.39-0.39,1.02,0,1.41l1.42,1.42 c0.39,0.39,1.02,0.39,1.41,0l3.17-3.17c0.39-0.39,0.39-1.02,0-1.41l0,0c-0.39-0.39-1.02-0.39-1.41,0L15.41,18.17z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4,4L4,4c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H5C4.45,3,4,3.45,4,4z"
})));

const MaterialGradingRounded = (styled.default || styled)(MaterialGradingRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialGradingRounded;
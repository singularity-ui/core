import React from 'react';
import styled from 'styled-components';

const MaterialQuickreplyTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", {
  opacity: ".3"
}, /*#__PURE__*/React.createElement("polygon", {
  points: "4,4 4,17.17 5.17,16 15,16 15,10 20,10 20,4"
})), /*#__PURE__*/React.createElement("path", {
  d: "M5.17,16L4,17.17V4h16v6h2V4c0-1.1-0.9-2-2-2H4C2.9,2,2.01,2.9,2.01,4L2,22l4-4h9v-2H5.17z"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "19,23 22.5,16 20.3,16 22,12 17,12 17,18 19,18"
})))));

const MaterialQuickreplyTwoTone = (styled.default || styled)(MaterialQuickreplyTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialQuickreplyTwoTone;
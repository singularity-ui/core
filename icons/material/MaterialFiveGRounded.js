import React from 'react';
import styled from 'styled-components';

const MaterialFiveGRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M18,13h1v2h-5V9h6c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-6c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h5c1.1,0,2-0.9,2-2v-3 c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1v0C17,12.55,17.45,13,18,13z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4,13h4v2H4c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h4c1.1,0,2-0.9,2-2v-2c0-1.1-0.9-2-2-2H5V9h4c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H4C3.45,7,3,7.45,3,8v4C3,12.55,3.45,13,4,13z"
}))));

const MaterialFiveGRounded = (styled.default || styled)(MaterialFiveGRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialFiveGRounded;
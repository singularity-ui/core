import React from 'react';
import styled from 'styled-components';

const MaterialAddchartRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("path", {
  d: "M11,10c0-0.55,0.45-1,1-1s1,0.45,1,1v7h-2V10z M20,13c-0.55,0-1,0.45-1,1v5H5V5h5c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1H5 C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-5C21,13.45,20.55,13,20,13z M21,5h-2V3c0-0.55-0.45-1-1-1s-1,0.45-1,1v2 h-2c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V7h2c0.55,0,1-0.45,1-1C22,5.45,21.55,5,21,5z M16,13 c-0.55,0-1,0.45-1,1v3h2v-3C17,13.45,16.55,13,16,13z M7,12v5h2v-5c0-0.55-0.45-1-1-1S7,11.45,7,12z"
})));

const MaterialAddchartRounded = (styled.default || styled)(MaterialAddchartRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialAddchartRounded;
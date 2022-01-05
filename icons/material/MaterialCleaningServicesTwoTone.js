import React from 'react';
import styled from 'styled-components';

const MaterialCleaningServicesTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "8",
  opacity: ".3",
  width: "2",
  x: "11",
  y: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16,13H8c-1.65,0-3,1.35-3,3v5h2v-3c0-0.55,0.45-1,1-1s1,0.45,1,1v3h2v-3c0-0.55,0.45-1,1-1s1,0.45,1,1v3h2 v-3c0-0.55,0.45-1,1-1s1,0.45,1,1v3h2v-5C19,14.35,17.65,13,16,13z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16,11h-1V3c0-1.1-0.9-2-2-2h-2C9.9,1,9,1.9,9,3v8H8c-2.76,0-5,2.24-5,5v7h18v-7C21,13.24,18.76,11,16,11z M11,3h2v8h-2V3 z M19,21h-2v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3h-2v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3H9v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3H5 v-5c0-1.65,1.35-3,3-3h8c1.65,0,3,1.35,3,3V21z"
}))));

const MaterialCleaningServicesTwoTone = (styled.default || styled)(MaterialCleaningServicesTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialCleaningServicesTwoTone;
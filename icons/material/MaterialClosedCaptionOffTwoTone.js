import React from 'react';
import styled from 'styled-components';

const MaterialClosedCaptionOffTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M19,6H5v12h14V6z M11,11H9.5v-0.5h-2v3h2V13H11v1c0,0.55-0.45,1-1,1H7 c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1V11z M18,11h-1.5v-0.5h-2v3h2V13H18v1c0,0.55-0.45,1-1,1h-3 c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1V11z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5,20h14c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2H5C3.89,4,3,4.9,3,6v12C3,19.1,3.89,20,5,20z M5,6h14v12H5V6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10,9H7c-0.55,0-1,0.45-1,1v4c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1v-1H9.5v0.5h-2v-3h2V11H11v-1C11,9.45,10.55,9,10,9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17,9h-3c-0.55,0-1,0.45-1,1v4c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1v-1h-1.5v0.5h-2v-3h2V11H18v-1 C18,9.45,17.55,9,17,9z"
})))));

const MaterialClosedCaptionOffTwoTone = (styled.default || styled)(MaterialClosedCaptionOffTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialClosedCaptionOffTwoTone;
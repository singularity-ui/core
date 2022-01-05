import React from 'react';
import styled from 'styled-components';

const MaterialHouseTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M7,10.19V18h2v-6h6v6h2v-7.81l-5-4.5L7,10.19z M14,10h-4c0-1.1,0.9-2,2-2S14,8.9,14,10z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,9.3V4h-3v2.6L12,3L2,12h3v8h6v-6h2v6h6v-8h3L19,9.3z M17,18h-2v-6H9v6H7v-7.81l5-4.5l5,4.5V18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10,10h4c0-1.1-0.9-2-2-2S10,8.9,10,10z"
}))));

const MaterialHouseTwoTone = (styled.default || styled)(MaterialHouseTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialHouseTwoTone;
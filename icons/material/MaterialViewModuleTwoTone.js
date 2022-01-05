import React from 'react';
import styled from 'styled-components';

const MaterialViewModuleTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,11h-3.33V7H19V11z M13.67,11h-3.33V7h3.33V11z M8.33,7v4H5V7H8.33z M5,17v-4h3.33v4H5z M10.33,17v-4h3.33 v4H10.33z M15.67,17v-4H19v4H15.67z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3,5v14h18V5H3z M19,11h-3.33V7H19V11z M13.67,11h-3.33V7h3.33V11z M8.33,7v4H5V7H8.33z M5,17v-4h3.33v4H5z M10.33,17v-4 h3.33v4H10.33z M15.67,17v-4H19v4H15.67z"
}));

const MaterialViewModuleTwoTone = (styled.default || styled)(MaterialViewModuleTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialViewModuleTwoTone;
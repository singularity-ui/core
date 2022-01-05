import React from 'react';
import styled from 'styled-components';

const MaterialSmartScreenTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  y: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M3,17h1V7H3V17z M20,7v10h1V7H20z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14,11.25h-1.5v1.5H14V11.25z M16.5,11.25H15v1.5h1.5V11.25z M11.5,11.25H10v1.5h1.5V11.25z M9,11.25H7.5v1.5H9V11.25z M21,5H3C1.9,5,1,5.9,1,7v10c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V7C23,5.9,22.1,5,21,5z M4,17H3V7h1V17z M18,17H6V7h12V17z M21,17 h-1V7h1V17z"
})));

const MaterialSmartScreenTwoTone = (styled.default || styled)(MaterialSmartScreenTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSmartScreenTwoTone;
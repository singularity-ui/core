import React from 'react';
import styled from 'styled-components';

const MaterialNoDrinksTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("polygon", {
  opacity: ".3",
  points: "14.77,9 11.83,9 13.38,10.56"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.19,21.19L2.81,2.81L1.39,4.22l8.23,8.23L11,14v5H6v2h12v-0.17l1.78,1.78L21.19,21.19z M13,19v-3.17L16.17,19H13z M7.83,5l-2-2H21v2l-6.2,6.97l-1.42-1.42L14.77,9h-2.94l-2-2h6.74l1.78-2H7.83z"
})));

const MaterialNoDrinksTwoTone = (styled.default || styled)(MaterialNoDrinksTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialNoDrinksTwoTone;
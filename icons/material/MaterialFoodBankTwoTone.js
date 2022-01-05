import React from 'react';
import styled from 'styled-components';

const MaterialFoodBankTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,5.5l6,4.5v9H6v-9L12,5.5 M11.5,9.5v3H11v-3h-1v3H9.5v-3h-1v3c0,0.83,0.67,1.5,1.5,1.5v4h1v-4 c0.83,0,1.5-0.67,1.5-1.5v-3H11.5z M13,11.5v3h1V18h1V9.5C13.9,9.5,13,10.4,13,11.5z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,5.5l6,4.5v9H6v-9L12,5.5 M12,3L4,9v12h16V9L12,3L12,3z M11.5,9.5v3H11v-3h-1v3H9.5v-3h-1v3c0,0.83,0.67,1.5,1.5,1.5v4h1 v-4c0.83,0,1.5-0.67,1.5-1.5v-3H11.5z M13,11.5v3h1V18h1V9.5C13.9,9.5,13,10.4,13,11.5z"
}));

const MaterialFoodBankTwoTone = (styled.default || styled)(MaterialFoodBankTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialFoodBankTwoTone;
import React from 'react';
import styled from 'styled-components';

const MaterialEscalatorRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2l0-14C21,3.9,20.1,3,19,3z M17,9h-1.7l-4.71,8.49 C10.41,17.8,10.07,18,9.71,18H7c-0.83,0-1.5-0.67-1.5-1.5S6.17,15,7,15h1.7l4.71-8.49C13.59,6.2,13.93,6,14.29,6H17 c0.83,0,1.5,0.67,1.5,1.5S17.83,9,17,9z"
}))));

const MaterialEscalatorRounded = (styled.default || styled)(MaterialEscalatorRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialEscalatorRounded;
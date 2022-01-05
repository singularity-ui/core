import React from 'react';
import styled from 'styled-components';

const MaterialShoppingBagSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,6h-4c0-2.21-1.79-4-4-4S8,3.79,8,6H4v16h16V6z M10,11H8V8h2V11z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M16,11 h-2V8h2V11z"
})));

const MaterialShoppingBagSharp = (styled.default || styled)(MaterialShoppingBagSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialShoppingBagSharp;
import React from 'react';
import styled from 'styled-components';

const MaterialCarpenterSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M7,1.5L3.11,5.39l8.13,11.67l-1.41,1.41l4.24,4.24l7.07-7.07L7,1.5z M12.66,18.47l4.24-4.24l1.41,1.41l-4.24,4.24 L12.66,18.47z"
}));

const MaterialCarpenterSharp = (styled.default || styled)(MaterialCarpenterSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialCarpenterSharp;
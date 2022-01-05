import React from 'react';
import styled from 'styled-components';

const MaterialTapasSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M22,10V1h-8v9c0,1.86,1.28,3.41,3,3.86V21h-2v2h6v-2h-2v-7.14C20.72,13.41,22,11.86,22,10z M20,3v3h-4V3H20z M10,9H8V8h2 c1.38,0,2.5-1.12,2.5-2.5C12.5,4.12,11.38,3,10,3H8V1H6v2H4C2.62,3,1.5,4.12,1.5,5.5C1.5,6.88,2.62,8,4,8h2v1H4 c-1.38,0-2.5,1.12-2.5,2.5C1.5,12.88,2.62,14,4,14h2v9h2v-9h2c1.38,0,2.5-1.12,2.5-2.5C12.5,10.12,11.38,9,10,9z"
}));

const MaterialTapasSharp = (styled.default || styled)(MaterialTapasSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialTapasSharp;
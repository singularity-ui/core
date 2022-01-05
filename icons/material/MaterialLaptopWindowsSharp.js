import React from 'react';
import styled from 'styled-components';

const MaterialLaptopWindowsSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 18v-1h1.99L22 3H2v14h2v1H0v2h24v-2h-4zM4 5h16v10H4V5z"
}));

const MaterialLaptopWindowsSharp = (styled.default || styled)(MaterialLaptopWindowsSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialLaptopWindowsSharp;
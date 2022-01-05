import React from 'react';
import styled from 'styled-components';

const MaterialKingBedSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "3",
  width: "5",
  x: "6",
  y: "7"
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "3",
  width: "5",
  x: "13",
  y: "7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,10V5H4v5H2v7h1.33L4,19h1l0.67-2h12.67L19,19h1l0.67-2H22v-7H20z M11,10H6V7h5V10z M18,10h-5V7h5V10z"
}))));

const MaterialKingBedSharp = (styled.default || styled)(MaterialKingBedSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialKingBedSharp;
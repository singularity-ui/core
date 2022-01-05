import React from 'react';
import styled from 'styled-components';

const MaterialAdUnitsSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  x: "0"
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M19,1H5v22h14V1z M17,19H7V5h10V19z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "8",
  x: "8",
  y: "6"
}))));

const MaterialAdUnitsSharp = (styled.default || styled)(MaterialAdUnitsSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialAdUnitsSharp;
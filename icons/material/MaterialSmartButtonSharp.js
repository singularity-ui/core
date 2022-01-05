import React from 'react';
import styled from 'styled-components';

const MaterialSmartButtonSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M22,17h-3l0-2h1V9H4v6h6v2H2V7h20V17z M14.5,19l1.09-2.41L18,15.5l-2.41-1.09L14.5,12l-1.09,2.41L11,15.5l2.41,1.09 L14.5,19z M17,14l0.62-1.38L19,12l-1.38-0.62L17,10l-0.62,1.38L15,12l1.38,0.62L17,14z"
})));

const MaterialSmartButtonSharp = (styled.default || styled)(MaterialSmartButtonSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSmartButtonSharp;
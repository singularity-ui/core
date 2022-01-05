import React from 'react';
import styled from 'styled-components';

const MaterialNineKPlusSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M7.5,10h1v1.5h-1V10z M21,3H3v18h18V3z M10,9v6H6v-1.5h2.5v-1H6V9H10z M16,15h-1.75l-1.75-2.25V15H11V9h1.5v2.25L14.25,9 H16l-2.25,3L16,15z M19,12.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V12.5z"
})));

const MaterialNineKPlusSharp = (styled.default || styled)(MaterialNineKPlusSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialNineKPlusSharp;
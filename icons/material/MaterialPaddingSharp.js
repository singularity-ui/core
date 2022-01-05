import React from 'react';
import styled from 'styled-components';

const MaterialPaddingSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M3,3v18h18V3H3z M9,9H7V7h2V9z M13,9h-2V7h2V9z M17,9h-2V7h2V9z"
})));

const MaterialPaddingSharp = (styled.default || styled)(MaterialPaddingSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialPaddingSharp;
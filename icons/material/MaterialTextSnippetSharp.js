import React from 'react';
import styled from 'styled-components';

const MaterialTextSnippetSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M21,9l-6-6H3v18h18V9z M7,7h7v2H7V7z M17,17H7v-2h10V17z M17,13H7v-2h10V13z"
})));

const MaterialTextSnippetSharp = (styled.default || styled)(MaterialTextSnippetSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialTextSnippetSharp;
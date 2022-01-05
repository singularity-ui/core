import React from 'react';
import styled from 'styled-components';

const MaterialBentoSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M16,11V5h6v6H16z M16,19h6v-6h-6V19z M14,5v14H2V5H14z M9.5,12c0-0.83-0.67-1.5-1.5-1.5S6.5,11.17,6.5,12s0.67,1.5,1.5,1.5 S9.5,12.83,9.5,12z"
})));

const MaterialBentoSharp = (styled.default || styled)(MaterialBentoSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialBentoSharp;
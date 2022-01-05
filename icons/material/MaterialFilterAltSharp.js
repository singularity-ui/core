import React from 'react';
import styled from 'styled-components';

const MaterialFilterAltSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24 M24,24H0",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3,4c2.01,2.59,7,9,7,9v7h4v-7c0,0,4.98-6.41,7-9H3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})));

const MaterialFilterAltSharp = (styled.default || styled)(MaterialFilterAltSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialFilterAltSharp;
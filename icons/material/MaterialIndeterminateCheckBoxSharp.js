import React from 'react';
import styled from 'styled-components';

const MaterialIndeterminateCheckBoxSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 3H3v18h18V3zm-4 10H7v-2h10v2z"
}));

const MaterialIndeterminateCheckBoxSharp = (styled.default || styled)(MaterialIndeterminateCheckBoxSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialIndeterminateCheckBoxSharp;
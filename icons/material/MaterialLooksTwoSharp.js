import React from 'react';
import styled from 'styled-components';

const MaterialLooksTwoSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 3H3v18h18V3zm-6 10h-4v2h4v2H9v-6h4V9H9V7h6v6z"
}));

const MaterialLooksTwoSharp = (styled.default || styled)(MaterialLooksTwoSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialLooksTwoSharp;
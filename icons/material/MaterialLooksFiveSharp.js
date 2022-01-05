import React from 'react';
import styled from 'styled-components';

const MaterialLooksFiveSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 3H3v18h18V3zm-6 6h-4v2h4v6H9v-2h4v-2H9V7h6v2z"
}));

const MaterialLooksFiveSharp = (styled.default || styled)(MaterialLooksFiveSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialLooksFiveSharp;
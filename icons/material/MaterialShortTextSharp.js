import React from 'react';
import styled from 'styled-components';

const MaterialShortTextSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M4 9h16v2H4V9zm0 4h10v2H4v-2z"
}));

const MaterialShortTextSharp = (styled.default || styled)(MaterialShortTextSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialShortTextSharp;
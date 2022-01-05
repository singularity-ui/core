import React from 'react';
import styled from 'styled-components';

const MaterialSmsFailedSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 2H2v20l4-4h16V2zm-9 12h-2v-2h2v2zm0-4h-2V6h2v4z"
}));

const MaterialSmsFailedSharp = (styled.default || styled)(MaterialSmsFailedSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSmsFailedSharp;
import React from 'react';
import styled from 'styled-components';

const MaterialLooksFourSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M.04 0h24v24h-24V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.04 3h-18v18h18V3zm-6 14h-2v-4h-4V7h2v4h2V7h2v10z"
}));

const MaterialLooksFourSharp = (styled.default || styled)(MaterialLooksFourSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialLooksFourSharp;
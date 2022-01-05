import React from 'react';
import styled from 'styled-components';

const MaterialLtePlusMobiledataSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M3,14h3v2H1V8h2V14z M5,10h2v6h2v-6h2V8H5V10z M12,16h5v-2h-3v-1h3v-2h-3v-1h3V8h-5V16z M24,11h-2V9h-2v2h-2v2h2v2h2v-2h2 V11z"
}))));

const MaterialLtePlusMobiledataSharp = (styled.default || styled)(MaterialLtePlusMobiledataSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialLtePlusMobiledataSharp;
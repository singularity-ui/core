import React from 'react';
import styled from 'styled-components';

const MaterialLtePlusMobiledataRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M3,14h2c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1H2c-0.55,0-1-0.45-1-1V9c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1V14z M6,10 h1v5c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-5h1c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H6C5.45,8,5,8.45,5,9v0 C5,9.55,5.45,10,6,10z M13,16h3c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-2v-1h2c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-2v-1h2 c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-3c-0.55,0-1,0.45-1,1v6C12,15.55,12.45,16,13,16z M23,11h-1v-1c0-0.55-0.45-1-1-1h0 c-0.55,0-1,0.45-1,1v1h-1c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h1v1c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-1h1 c0.55,0,1-0.45,1-1v0C24,11.45,23.55,11,23,11z"
}))));

const MaterialLtePlusMobiledataRounded = (styled.default || styled)(MaterialLtePlusMobiledataRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialLtePlusMobiledataRounded;
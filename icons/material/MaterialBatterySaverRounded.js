import React from 'react';
import styled from 'styled-components';

const MaterialBatterySaverRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M16,4h-2V3c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1v1H8C7.45,4,7,4.45,7,5v16c0,0.55,0.45,1,1,1h8c0.55,0,1-0.45,1-1V5 C17,4.45,16.55,4,16,4z M14,14h-1v1c0,0.55-0.45,1-1,1h0c-0.55,0-1-0.45-1-1v-1h-1c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h1v-1 c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v1h1c0.55,0,1,0.45,1,1v0C15,13.55,14.55,14,14,14z"
}))));

const MaterialBatterySaverRounded = (styled.default || styled)(MaterialBatterySaverRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialBatterySaverRounded;
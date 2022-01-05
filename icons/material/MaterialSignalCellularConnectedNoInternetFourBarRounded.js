import React from 'react';
import styled from 'styled-components';

const MaterialSignalCellularConnectedNoInternetFourBarRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M21,18L21,18c0.55,0,1-0.45,1-1v-6c0-0.55-0.45-1-1-1l0,0c-0.55,0-1,0.45-1,1v6C20,17.55,20.45,18,21,18z M21,22L21,22 c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v0C20,21.55,20.45,22,21,22z M4.41,22H18V11c0-1.66,1.34-3,3-3h1 V4.41c0-0.89-1.08-1.34-1.71-0.71L3.71,20.29C3.08,20.92,3.52,22,4.41,22z"
})))));

const MaterialSignalCellularConnectedNoInternetFourBarRounded = (styled.default || styled)(MaterialSignalCellularConnectedNoInternetFourBarRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSignalCellularConnectedNoInternetFourBarRounded;
import React from 'react';
import styled from 'styled-components';

const MaterialNearbyErrorRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M11.29,8.28l-3.01,3.01c-0.39,0.39-0.39,1.02,0,1.41l3.01,3.01c0.39,0.39,1.02,0.39,1.41,0l3.01-3.01 c0.39-0.39,0.39-1.02,0-1.41l-3.01-3.01C12.32,7.89,11.68,7.89,11.29,8.28z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.59,2.59l-8.01,8c-0.78,0.78-0.78,2.05,0,2.83l8.01,8c0.78,0.78,2.05,0.78,2.83,0L18,16.82V13.2l-6,6L4.79,12L12,4.79 l6,6V7.17l-4.58-4.58C12.64,1.8,11.37,1.8,10.59,2.59z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,11v6c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-6c0-0.55-0.45-1-1-1h0C20.45,10,20,10.45,20,11z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "21",
  cy: "21",
  r: "1"
}))));

const MaterialNearbyErrorRounded = (styled.default || styled)(MaterialNearbyErrorRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialNearbyErrorRounded;
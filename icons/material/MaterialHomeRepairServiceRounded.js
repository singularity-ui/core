import React from 'react';
import styled from 'styled-components';

const MaterialHomeRepairServiceRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M17,16c-0.55,0-1-0.45-1-1H8c0,0.55-0.45,1-1,1s-1-0.45-1-1H2v3c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-3h-4 C18,15.55,17.55,16,17,16z"
})), /*#__PURE__*/React.createElement("path", {
  d: "M20,8h-3V6c0-1.1-0.9-2-2-2H9C7.9,4,7,4.9,7,6v2H4c-1.1,0-2,0.9-2,2v4h4v-1c0-0.55,0.45-1,1-1s1,0.45,1,1v1h8v-1 c0-0.55,0.45-1,1-1s1,0.45,1,1v1h4v-4C22,8.9,21.1,8,20,8z M15,8H9V6h6V8z"
}))));

const MaterialHomeRepairServiceRounded = (styled.default || styled)(MaterialHomeRepairServiceRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialHomeRepairServiceRounded;
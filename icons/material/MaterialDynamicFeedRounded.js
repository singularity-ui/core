import React from 'react';
import styled from 'styled-components';

const MaterialDynamicFeedRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M7,8L7,8C6.45,8,6,8.45,6,9v6c0,1.1,0.9,2,2,2h8c0.55,0,1-0.45,1-1l0,0c0-0.55-0.45-1-1-1H8V9C8,8.45,7.55,8,7,8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3,12L3,12c-0.55,0-1,0.45-1,1v6c0,1.1,0.9,2,2,2h8c0.55,0,1-0.45,1-1l0,0c0-0.55-0.45-1-1-1H4v-6C4,12.45,3.55,12,3,12z"
})))));

const MaterialDynamicFeedRounded = (styled.default || styled)(MaterialDynamicFeedRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialDynamicFeedRounded;
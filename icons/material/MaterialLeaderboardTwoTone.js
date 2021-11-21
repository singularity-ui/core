import React from 'react';
import styled from 'styled-components';

const MaterialLeaderboardTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("g", {
  opacity: ".3"
}, /*#__PURE__*/React.createElement("path", {
  d: "M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
})));

const MaterialLeaderboardTwoTone = (styled.default || styled)(MaterialLeaderboardTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialLeaderboardTwoTone;
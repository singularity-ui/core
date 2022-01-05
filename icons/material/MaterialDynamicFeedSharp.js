import React from 'react';
import styled from 'styled-components';

const MaterialDynamicFeedSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "8,8 6,8 6,17 17,17 17,15 8,15"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22,3H10v10h12V3z M20,11h-8V7h8V11z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "4,12 2,12 2,21 13,21 13,19 4,19"
}))), /*#__PURE__*/React.createElement("g", {
  display: "none"
}, /*#__PURE__*/React.createElement("g", {
  display: "inline"
}), /*#__PURE__*/React.createElement("g", {
  display: "inline"
}, /*#__PURE__*/React.createElement("polygon", {
  points: "8,8 6,8 6,17 17,17 17,15 8,15"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22,3H10v10h12V3z M20,11h-8V7h8V11z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "4,12 2,12 2,21 13,21 13,19 4,19"
}))));

const MaterialDynamicFeedSharp = (styled.default || styled)(MaterialDynamicFeedSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialDynamicFeedSharp;
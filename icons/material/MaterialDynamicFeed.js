import React from 'react';
import styled from 'styled-components';

const MaterialDynamicFeedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z"
}))), /*#__PURE__*/React.createElement("g", {
  display: "none"
}, /*#__PURE__*/React.createElement("g", {
  display: "inline"
}), /*#__PURE__*/React.createElement("g", {
  display: "inline"
}, /*#__PURE__*/React.createElement("path", {
  d: "M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z"
}))));

const MaterialDynamicFeed = (styled.default || styled)(MaterialDynamicFeedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialDynamicFeed;
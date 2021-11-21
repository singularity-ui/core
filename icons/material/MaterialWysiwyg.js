import React from 'react';
import styled from 'styled-components';

const MaterialWysiwygSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,3H5C3.89,3,3,3.9,3,5v14c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.11,3,19,3z M19,19H5V7h14V19z M17,12H7v-2 h10V12z M13,16H7v-2h6V16z"
})));

const MaterialWysiwyg = (styled.default || styled)(MaterialWysiwygSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialWysiwyg;
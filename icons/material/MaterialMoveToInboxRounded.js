import React from 'react';
import styled from 'styled-components';

const MaterialMoveToInboxRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,14h-3.56 c-0.36,0-0.68,0.19-0.86,0.5C14.06,15.4,13.11,16,12,16s-2.06-0.6-2.58-1.5C9.24,14.19,8.91,14,8.56,14H5V5h14V14z M14.79,10H13V7 c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v3H9.21c-0.45,0-0.67,0.54-0.35,0.85l2.79,2.79c0.2,0.2,0.51,0.2,0.71,0l2.79-2.79 C15.46,10.54,15.24,10,14.79,10z"
})));

const MaterialMoveToInboxRounded = (styled.default || styled)(MaterialMoveToInboxRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialMoveToInboxRounded;
import React from 'react';
import styled from 'styled-components';

const MaterialWarningAmberSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "13,16 11,16 11,18 13,18"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "13,10 11,10 11,15 13,15"
})))));

const MaterialWarningAmber = (styled.default || styled)(MaterialWarningAmberSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialWarningAmber;
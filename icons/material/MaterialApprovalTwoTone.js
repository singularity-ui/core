import React from 'react';
import styled from 'styled-components';

const MaterialApprovalTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "2",
  opacity: ".3",
  width: "12",
  x: "6",
  y: "16"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,4c-1.66,0-3,1.34-3,3l3,4l3-4C15,5.34,13.66,4,12,4z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,2C9.24,2,7,4.24,7,7l5,7l5-7C17,4.24,14.76,2,12,2z M12,11L9,7c0-1.66,1.34-3,3-3s3,1.34,3,3L12,11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18,14h-6H6c-1.1,0-2,0.9-2,2v6h16v-6C20,14.9,19.1,14,18,14z M18,18H6v-2h12V18z"
}))));

const MaterialApprovalTwoTone = (styled.default || styled)(MaterialApprovalTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialApprovalTwoTone;
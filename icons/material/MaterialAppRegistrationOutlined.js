import React from 'react';
import styled from 'styled-components';

const MaterialAppRegistrationOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  height: "4",
  width: "4",
  x: "10",
  y: "4"
}), /*#__PURE__*/React.createElement("rect", {
  height: "4",
  width: "4",
  x: "4",
  y: "16"
}), /*#__PURE__*/React.createElement("rect", {
  height: "4",
  width: "4",
  x: "4",
  y: "10"
}), /*#__PURE__*/React.createElement("rect", {
  height: "4",
  width: "4",
  x: "4",
  y: "4"
}), /*#__PURE__*/React.createElement("rect", {
  height: "4",
  width: "4",
  x: "16",
  y: "4"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "11,17.86 11,20 13.1,20 19.08,14.03 16.96,11.91"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "14,12.03 14,10 10,10 10,14 12.03,14"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.85,11.56l-1.41-1.41c-0.2-0.2-0.51-0.2-0.71,0l-1.06,1.06l2.12,2.12l1.06-1.06C21.05,12.07,21.05,11.76,20.85,11.56z"
}))));

const MaterialAppRegistrationOutlined = (styled.default || styled)(MaterialAppRegistrationOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialAppRegistrationOutlined;
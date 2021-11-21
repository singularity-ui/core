import React from 'react';
import styled from 'styled-components';

const MaterialAnalyticsOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "5",
  width: "2",
  x: "7",
  y: "12"
}), /*#__PURE__*/React.createElement("rect", {
  height: "10",
  width: "2",
  x: "15",
  y: "7"
}), /*#__PURE__*/React.createElement("rect", {
  height: "3",
  width: "2",
  x: "11",
  y: "14"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "11",
  y: "10"
}))));

const MaterialAnalyticsOutlined = (styled.default || styled)(MaterialAnalyticsOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialAnalyticsOutlined;
import React from 'react';
import styled from 'styled-components';

const MaterialHeadphonesBatterySharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "20,7 20,6 18,6 18,7 16,7 16,18 22,18 22,7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8,6c-3.31,0-6,2.69-6,6v6h4v-5H3.5v-1c0-2.48,2.02-4.5,4.5-4.5s4.5,2.02,4.5,4.5v1H10v5h4v-6C14,8.69,11.31,6,8,6z"
}))));

const MaterialHeadphonesBatterySharp = (styled.default || styled)(MaterialHeadphonesBatterySharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialHeadphonesBatterySharp;
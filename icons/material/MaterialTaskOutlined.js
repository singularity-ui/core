import React from 'react';
import styled from 'styled-components';

const MaterialTaskOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M14,2H6C4.9,2,4.01,2.9,4.01,4L4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2V8L14,2z M18,20H6V4h7v5h5V20z M8.82,13.05 L7.4,14.46L10.94,18l5.66-5.66l-1.41-1.41l-4.24,4.24L8.82,13.05z"
})));

const MaterialTaskOutlined = (styled.default || styled)(MaterialTaskOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialTaskOutlined;
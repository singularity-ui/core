import React from 'react';
import styled from 'styled-components';

const MaterialImageNotSupportedOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.9,21.9l-6.1-6.1l-2.69-2.69l0,0L5,5l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31 L21.9,21.9z M5,19V7.83l6.84,6.84L11,15.72L9,13l-3,4h8.17l2,2H5z M7.83,5l-2-2H19c1.1,0,2,0.9,2,2v13.17l-2-2V5H7.83z"
})));

const MaterialImageNotSupportedOutlined = (styled.default || styled)(MaterialImageNotSupportedOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialImageNotSupportedOutlined;
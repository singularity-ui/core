import React from 'react';
import styled from 'styled-components';

const MaterialMicExternalOffOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M10,5c0-1.66-1.34-3-3-3C6.38,2,5.81,2.19,5.33,2.5l4.15,4.15C9.8,6.18,10,5.61,10,5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14,6c0-1.1,0.9-2,2-2s2,0.9,2,2v9.17l2,2V6c0-2.21-1.79-4-4-4s-4,1.79-4,4v3.17l2,2V6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.1,2.1L0.69,3.51L5.17,8H4l1,10h1c0,2.21,1.79,4,4,4s4-1.79,4-4v-1.17l6.49,6.49l1.41-1.41L2.1,2.1z M7.19,16H6.81 l-0.6-6h0.96l0.56,0.56L7.19,16z M12,18c0,1.1-0.9,2-2,2s-2-0.9-2-2h1l0.56-5.61L12,14.83V18z"
}))));

const MaterialMicExternalOffOutlined = (styled.default || styled)(MaterialMicExternalOffOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialMicExternalOffOutlined;
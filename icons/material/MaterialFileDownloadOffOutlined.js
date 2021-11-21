import React from 'react';
import styled from 'styled-components';

const MaterialFileDownloadOffOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18,15.17V15h2v2.17L18,15.17z M15.41,12.59L17,11l-1.41-1.41L14,11.17L15.41,12.59z M13,10.17V4h-2v4.17L13,10.17z M21.19,21.19l-1.78-1.78L2.81,2.81L1.39,4.22l6.19,6.19L7,11l5,5l0.59-0.59L15.17,18H6v-3H4v3c0,1.1,0.9,2,2,2h11.17l2.61,2.61 L21.19,21.19z"
}));

const MaterialFileDownloadOffOutlined = (styled.default || styled)(MaterialFileDownloadOffOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialFileDownloadOffOutlined;
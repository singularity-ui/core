import React from 'react';
import styled from 'styled-components';

const MaterialCropFreeOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2zm2 10H3v4c0 1.1.9 2 2 2h4v-2H5v-4zm14 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zm0-16h-4v2h4v4h2V5c0-1.1-.9-2-2-2z"
}));

const MaterialCropFreeOutlined = (styled.default || styled)(MaterialCropFreeOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialCropFreeOutlined;
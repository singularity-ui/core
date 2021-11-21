import React from 'react';
import styled from 'styled-components';

const MaterialViewComfyTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.25 11h2.25v2H9.25zm0 4h2.25v2H9.25zm0-8h2.25v2H9.25zm4.25 8h2.25v2H13.5zM5 15h2.25v2H5zm0-4h2.25v2H5zm0-4h2.25v2H5zm12.75 0H20v2h-2.25zm-4.25 4h2.25v2H13.5zm0-4h2.25v2H13.5zm4.25 8H20v2h-2.25zm0-4H20v2h-2.25z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 5v14h19V5H3zm4.25 12H5v-2h2.25v2zm0-4H5v-2h2.25v2zm0-4H5V7h2.25v2zm4.25 8H9.25v-2h2.25v2zm0-4H9.25v-2h2.25v2zm0-4H9.25V7h2.25v2zm4.25 8H13.5v-2h2.25v2zm0-4H13.5v-2h2.25v2zm0-4H13.5V7h2.25v2zM20 17h-2.25v-2H20v2zm0-4h-2.25v-2H20v2zm0-4h-2.25V7H20v2z"
}));

const MaterialViewComfyTwoTone = (styled.default || styled)(MaterialViewComfyTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialViewComfyTwoTone;
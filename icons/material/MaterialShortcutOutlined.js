import React from 'react';
import styled from 'styled-components';

const MaterialShortcutOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M15,5l-1.41,1.41L15,7.83L17.17,10H8c-2.76,0-5,2.24-5,5v4h2v-4c0-1.65,1.35-3,3-3h9.17L15,14.17l-1.41,1.41L15,17l6-6 L15,5z"
})));

const MaterialShortcutOutlined = (styled.default || styled)(MaterialShortcutOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialShortcutOutlined;
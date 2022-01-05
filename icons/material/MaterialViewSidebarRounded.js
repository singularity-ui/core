import React from 'react';
import styled from 'styled-components';

const MaterialViewSidebarRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15,20H3c-0.55,0-1-0.45-1-1V5c0-0.55,0.45-1,1-1h12c0.55,0,1,0.45,1,1v14C16,19.55,15.55,20,15,20z M19,8h2 c0.55,0,1-0.45,1-1V5c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1v2C18,7.55,18.45,8,19,8z M19,20h2c0.55,0,1-0.45,1-1v-2 c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1v2C18,19.55,18.45,20,19,20z M19,14h2c0.55,0,1-0.45,1-1v-2c0-0.55-0.45-1-1-1h-2 c-0.55,0-1,0.45-1,1v2C18,13.55,18.45,14,19,14z"
})));

const MaterialViewSidebarRounded = (styled.default || styled)(MaterialViewSidebarRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialViewSidebarRounded;
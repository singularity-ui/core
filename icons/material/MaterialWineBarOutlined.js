import React from 'react';
import styled from 'styled-components';

const MaterialWineBarOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M6,3l0,6c0,2.97,2.16,5.43,5,5.91V19H8v2h8v-2h-3v-4.09c2.84-0.48,5-2.94,5-5.91V3H6z M12,13c-1.86,0-3.41-1.28-3.86-3h7.72 C15.41,11.72,13.86,13,12,13z M16,8H8l0-3h8L16,8z"
}));

const MaterialWineBarOutlined = (styled.default || styled)(MaterialWineBarOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialWineBarOutlined;
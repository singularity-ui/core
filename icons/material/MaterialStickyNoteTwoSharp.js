import React from 'react';
import styled from 'styled-components';

const MaterialStickyNoteTwoSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M2.99,3L3,21h12l6-6V3H2.99z M7,8h10v2H7V8z M12,14H7v-2h5V14z M14,19.5V14h5.5L14,19.5z"
}));

const MaterialStickyNoteTwoSharp = (styled.default || styled)(MaterialStickyNoteTwoSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialStickyNoteTwoSharp;
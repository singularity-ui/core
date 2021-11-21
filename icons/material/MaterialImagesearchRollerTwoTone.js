import React from 'react';
import styled from 'styled-components';

const MaterialImagesearchRollerTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  "enable-background": "new",
  height: "2",
  opacity: ".3",
  width: "10",
  x: "8",
  y: "4"
}), /*#__PURE__*/React.createElement("rect", {
  "enable-background": "new",
  height: "4",
  opacity: ".3",
  width: "2",
  x: "12",
  y: "17"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,7V3c0-0.55-0.45-1-1-1H7C6.45,2,6,2.45,6,3v1H4C2.9,4,2,4.9,2,6v4c0,1.1,0.9,2,2,2h8v3h-1c-0.55,0-1,0.45-1,1v6 c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-6c0-0.55-0.45-1-1-1h-1v-3c0-1.1-0.9-2-2-2H4V6h2v1c0,0.55,0.45,1,1,1h12 C19.55,8,20,7.55,20,7z M8,4h10v2H8V4z M14,21h-2v-4h2V21z"
}))));

const MaterialImagesearchRollerTwoTone = (styled.default || styled)(MaterialImagesearchRollerTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialImagesearchRollerTwoTone;
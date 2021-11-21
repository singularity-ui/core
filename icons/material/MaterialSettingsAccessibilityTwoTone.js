import React from 'react';
import styled from 'styled-components';

const MaterialSettingsAccessibilityTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M20.5,4c-2.61,0.7-5.67,1-8.5,1S6.11,4.7,3.5,4L3,6c1.86,0.5,4,0.83,6,1v12h2v-6h2v6h2V7c2-0.17,4.14-0.5,6-1L20.5,4z M12,4c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,4,12,4z M7,24h2v-2H7V24z M11,24h2v-2h-2V24z M15,24h2v-2h-2V24z"
})));

const MaterialSettingsAccessibilityTwoTone = (styled.default || styled)(MaterialSettingsAccessibilityTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSettingsAccessibilityTwoTone;
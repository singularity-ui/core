import React from 'react';
import styled from 'styled-components';

const MaterialSignalWifiStatusbarFourBarRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M12,4C7.7,4,3.78,5.6,0.79,8.24C0.35,8.63,0.32,9.3,0.73,9.71l10.56,10.58c0.39,0.39,1.02,0.39,1.42,0L23.27,9.71 c0.41-0.41,0.38-1.08-0.06-1.47C20.22,5.6,16.3,4,12,4z"
})));

const MaterialSignalWifiStatusbarFourBarRounded = (styled.default || styled)(MaterialSignalWifiStatusbarFourBarRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSignalWifiStatusbarFourBarRounded;
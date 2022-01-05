import React from 'react';
import styled from 'styled-components';

const MaterialAddLocationRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  y: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M13,7c0-0.55-0.44-1-1-1c-0.55,0-1,0.44-1,1v2H9c-0.55,0-1,0.44-1,1c0,0.55,0.44,1,1,1h2v2 c0,0.55,0.44,1,1,1c0.55,0,1-0.44,1-1v-2h2c0.55,0,1-0.44,1-1c0-0.55-0.44-1-1-1h-2V7z M12,2c4.2,0,8,3.22,8,8.2 c0,3.18-2.45,6.92-7.34,11.23c-0.38,0.33-0.95,0.33-1.33,0C6.45,17.12,4,13.38,4,10.2C4,5.22,7.8,2,12,2z"
})))));

const MaterialAddLocationRounded = (styled.default || styled)(MaterialAddLocationRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialAddLocationRounded;
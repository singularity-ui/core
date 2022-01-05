import React from 'react';
import styled from 'styled-components';

const MaterialCompressRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M4,10L4,10c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H5C4.45,9,4,9.45,4,10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.79,4H13V2c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2H9.21C8.76,4,8.54,4.54,8.85,4.85l2.79,2.79 c0.2,0.2,0.51,0.2,0.71,0l2.79-2.79C15.46,4.54,15.24,4,14.79,4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.21,19H11v2c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-2h1.79c0.45,0,0.67-0.54,0.35-0.85l-2.79-2.79 c-0.2-0.2-0.51-0.2-0.71,0l-2.79,2.79C8.54,18.46,8.76,19,9.21,19z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5,14h14c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H5c-0.55,0-1,0.45-1,1v0C4,13.55,4.45,14,5,14z"
}))));

const MaterialCompressRounded = (styled.default || styled)(MaterialCompressRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialCompressRounded;
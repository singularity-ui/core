import React from 'react';
import styled from 'styled-components';

const MaterialWbTwilightRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M19.07,9.37l0.71-0.71c0.39-0.39,0.39-1.02,0-1.41l0,0c-0.39-0.39-1.02-0.39-1.41,0l-0.71,0.71 c-0.39,0.39-0.39,1.02,0,1.41C18.04,9.76,18.68,9.76,19.07,9.37z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21,18H3c-0.55,0-1,0.45-1,1s0.45,1,1,1h18c0.55,0,1-0.45,1-1S21.55,18,21,18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,7L12,7c0.56,0,1-0.45,1-1V5c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v1C11,6.55,11.45,7,12,7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.96,9.34c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41L5.66,7.22c-0.39-0.39-1.02-0.39-1.41,0l0,0 c-0.39,0.39-0.39,1.02,0,1.41L4.96,9.34z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,16c0-3.87-3.13-7-7-7s-7,3.13-7,7H19z"
}))));

const MaterialWbTwilightRounded = (styled.default || styled)(MaterialWbTwilightRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialWbTwilightRounded;
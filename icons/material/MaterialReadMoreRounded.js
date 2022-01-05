import React from 'react';
import styled from 'styled-components';

const MaterialReadMoreRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M14,9h7c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1h-7c-0.55,0-1,0.45-1,1C13,8.55,13.45,9,14,9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21,15h-7c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h7c0.55,0,1-0.45,1-1C22,15.45,21.55,15,21,15z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21,11h-4c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1C22,11.45,21.55,11,21,11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.85,7.85C8.54,7.54,8,7.76,8,8.21V11H3c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h5v2.79c0,0.45,0.54,0.67,0.85,0.35 l3.79-3.79c0.2-0.2,0.2-0.51,0-0.71L8.85,7.85z"
}))));

const MaterialReadMoreRounded = (styled.default || styled)(MaterialReadMoreRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialReadMoreRounded;
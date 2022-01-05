import React from 'react';
import styled from 'styled-components';

const MaterialImageNotSupportedRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M21.19,21.19l-0.78-0.78L18,18l-4.59-4.59L3.59,3.59v0L2.81,2.81c-0.39-0.39-1.02-0.39-1.41,0C1,3.2,1,3.83,1.39,4.22 L3,5.83V19c0,1.1,0.9,2,2,2h13.17l1.61,1.61c0.39,0.39,1.02,0.39,1.41,0C21.58,22.22,21.58,21.58,21.19,21.19z M6.02,18 c-0.42,0-0.65-0.48-0.39-0.81l2.49-3.2c0.2-0.25,0.58-0.26,0.78-0.01l2.1,2.53L12.17,15l3,3H6.02z M21,18.17L5.83,3H19 c1.1,0,2,0.9,2,2V18.17z"
})));

const MaterialImageNotSupportedRounded = (styled.default || styled)(MaterialImageNotSupportedRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialImageNotSupportedRounded;
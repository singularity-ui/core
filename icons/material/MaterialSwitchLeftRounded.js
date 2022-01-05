import React from 'react';
import styled from 'styled-components';

const MaterialSwitchLeftRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.5,8.62v6.76L5.12,12L8.5,8.62 M3.71,11.29c-0.39,0.39-0.39,1.02,0,1.41l4.59,4.59C8.92,17.92,10,17.48,10,16.59V7.41 c0-0.89-1.08-1.34-1.71-0.71L3.71,11.29z M14,7.41v9.17c0,0.89,1.08,1.34,1.71,0.71l4.59-4.59c0.39-0.39,0.39-1.02,0-1.41 l-4.59-4.59C15.08,6.08,14,6.52,14,7.41z"
}));

const MaterialSwitchLeftRounded = (styled.default || styled)(MaterialSwitchLeftRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSwitchLeftRounded;
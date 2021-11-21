import React from 'react';
import styled from 'styled-components';

const MaterialFormatIndentIncreaseTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 19h18v2H3zM3 3h18v2H3zm8 4h10v2H11zM3 8v8l4-4zm8 3h10v2H11zm0 4h10v2H11z"
}));

const MaterialFormatIndentIncreaseTwoTone = (styled.default || styled)(MaterialFormatIndentIncreaseTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialFormatIndentIncreaseTwoTone;
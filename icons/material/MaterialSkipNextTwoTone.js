import React from 'react';
import styled from 'styled-components';

const MaterialSkipNextTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 9.86v4.28L11.03 12z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.5 12L6 6v12l8.5-6zM8 9.86L11.03 12 8 14.14V9.86zM16 6h2v12h-2z"
}));

const MaterialSkipNextTwoTone = (styled.default || styled)(MaterialSkipNextTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSkipNextTwoTone;
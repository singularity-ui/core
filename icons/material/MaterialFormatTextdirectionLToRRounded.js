import React from 'react';
import styled from 'styled-components';

const MaterialFormatTextdirectionLToRRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 10v4c0 .55.45 1 1 1s1-.45 1-1V4h2v10c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1H9.17C7.08 2 5.22 3.53 5.02 5.61 4.79 7.99 6.66 10 9 10zm11.65 7.65l-2.79-2.79c-.32-.32-.86-.1-.86.35V17H6c-.55 0-1 .45-1 1s.45 1 1 1h11v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7z"
}));

const MaterialFormatTextdirectionLToRRounded = (styled.default || styled)(MaterialFormatTextdirectionLToRRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialFormatTextdirectionLToRRounded;
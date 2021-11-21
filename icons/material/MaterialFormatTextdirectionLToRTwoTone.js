import React from 'react';
import styled from 'styled-components';

const MaterialFormatTextdirectionLToRTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 8V4c-1.1 0-2 .9-2 2s.9 2 2 2z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4zm0-6v4c-1.1 0-2-.9-2-2s.9-2 2-2zm12 14l-4-4v3H5v2h12v3z"
}));

const MaterialFormatTextdirectionLToRTwoTone = (styled.default || styled)(MaterialFormatTextdirectionLToRTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialFormatTextdirectionLToRTwoTone;
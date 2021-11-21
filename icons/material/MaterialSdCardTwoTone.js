import React from 'react';
import styled from 'styled-components';

const MaterialSdCardTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 8.83V20h12V4h-7.17L6 8.83zM15 7h2v4h-2V7zm-3 0h2v4h-2V7zm-1 4H9V7h2v4z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V8.83L10.83 4H18v16zM9 7h2v4H9zm3 0h2v4h-2zm3 0h2v4h-2z"
}));

const MaterialSdCardTwoTone = (styled.default || styled)(MaterialSdCardTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSdCardTwoTone;
import React from 'react';
import styled from 'styled-components';

const MaterialFontDownloadOffSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.58,9.75l-0.87-0.87l0.23-0.66h0.1L12.58,9.75z M20.49,23.31L19.17,22H2V4.83L0.69,3.51L2.1,2.1l19.8,19.8L20.49,23.31z M12.1,14.93l-3.3-3.3L6.41,18h2.08l1.09-3.07H12.1z M10.35,7.52L10.92,6h2.14l2.55,6.79L22,19.17V2H4.83L10.35,7.52z"
}));

const MaterialFontDownloadOffSharp = (styled.default || styled)(MaterialFontDownloadOffSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialFontDownloadOffSharp;
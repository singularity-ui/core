import React from 'react';
import styled from 'styled-components';

const MaterialClosedCaptionDisabledSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M6.83,4H21v14.17L17.83,15H18v-2h-1.5v0.5h-0.17l-1.83-1.83V10.5h2V11H18V9h-5v1.17L6.83,4z M19.78,22.61L17.17,20H3V5.83 L1.39,4.22l1.41-1.41l18.38,18.38L19.78,22.61z M11,13.83L10.17,13H9.5v0.5h-2v-3h0.17L6.17,9H6v6h5V13.83z"
}));

const MaterialClosedCaptionDisabledSharp = (styled.default || styled)(MaterialClosedCaptionDisabledSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialClosedCaptionDisabledSharp;
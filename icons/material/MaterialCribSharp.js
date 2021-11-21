import React from 'react';
import styled from 'styled-components';

const MaterialCribSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,9h-8V4H8C5.79,4,4,5.79,4,8v8h4v2.93c-0.61-0.35-1.16-0.78-1.65-1.27l-1.42,1.42C6.74,20.88,9.24,22,12,22 c2.76,0,5.26-1.12,7.07-2.93l-1.42-1.42c-0.49,0.49-1.05,0.92-1.65,1.27V16h4V9z M14,19.75C13.36,19.91,12.69,20,12,20 c-0.69,0-1.36-0.09-2-0.25V16h4V19.75z"
}));

const MaterialCribSharp = (styled.default || styled)(MaterialCribSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialCribSharp;
import React from 'react';
import styled from 'styled-components';

const MaterialMarkChatReadSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  x: "0"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.03,17.5C12.01,17.67,12,17.83,12,18v0H6l-4,4V2h20v8.68C21.09,10.25,20.08,10,19,10c-3.87,0-7,3.13-7,7 C12,17.17,12.01,17.33,12.03,17.5z M23,14.34l-1.41-1.41l-4.24,4.24l-2.12-2.12l-1.41,1.41L17.34,20L23,14.34z"
})));

const MaterialMarkChatReadSharp = (styled.default || styled)(MaterialMarkChatReadSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialMarkChatReadSharp;
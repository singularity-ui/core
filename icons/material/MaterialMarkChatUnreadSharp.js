import React from 'react';
import styled from 'styled-components';

const MaterialMarkChatUnreadSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  y: "0"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22,6.98V18H6l-4,4V2h12.1C14.04,2.32,14,2.66,14,3c0,2.76,2.24,5,5,5C20.13,8,21.16,7.61,22,6.98z M16,3 c0,1.66,1.34,3,3,3s3-1.34,3-3s-1.34-3-3-3S16,1.34,16,3z"
})));

const MaterialMarkChatUnreadSharp = (styled.default || styled)(MaterialMarkChatUnreadSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialMarkChatUnreadSharp;
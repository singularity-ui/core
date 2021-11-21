import React from 'react';
import styled from 'styled-components';

const MaterialAddCommentSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M22 2H2v16h16l4 4V2zm-5 9h-4v4h-2v-4H7V9h4V5h2v4h4v2z"
}));

const MaterialAddCommentSharp = (styled.default || styled)(MaterialAddCommentSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialAddCommentSharp;
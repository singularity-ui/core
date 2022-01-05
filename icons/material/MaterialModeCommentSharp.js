import React from 'react';
import styled from 'styled-components';

const MaterialModeCommentSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M22 2H2v16h16l4 4z"
}));

const MaterialModeCommentSharp = (styled.default || styled)(MaterialModeCommentSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialModeCommentSharp;
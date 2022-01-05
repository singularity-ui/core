import React from 'react';
import styled from 'styled-components';

const MaterialViewArraySharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21,5h-3v14h3V5z M17,5H7v14h10V5z M6,5H3v14h3V5z"
}));

const MaterialViewArraySharp = (styled.default || styled)(MaterialViewArraySharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialViewArraySharp;
import React from 'react';
import styled from 'styled-components';

const MaterialSpaceBarSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M18 9v4H6V9H4v6h16V9h-2z"
}));

const MaterialSpaceBarSharp = (styled.default || styled)(MaterialSpaceBarSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSpaceBarSharp;